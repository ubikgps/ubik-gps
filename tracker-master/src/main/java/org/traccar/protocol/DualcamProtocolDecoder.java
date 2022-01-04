/*
 * Copyright 2021 Anton Tananaev (anton@traccar.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.traccar.protocol;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import org.traccar.BaseProtocolDecoder;
import org.traccar.Context;
import org.traccar.DeviceSession;
import org.traccar.NetworkMessage;
import org.traccar.Protocol;
import org.traccar.helper.BitUtil;
import org.traccar.model.Position;

import java.net.SocketAddress;
import java.nio.charset.StandardCharsets;

public class DualcamProtocolDecoder extends BaseProtocolDecoder {

    public DualcamProtocolDecoder(Protocol protocol) {
        super(protocol);
    }

    public static final int MSG_INIT = 0;
    public static final int MSG_START = 1;
    public static final int MSG_RESUME = 2;
    public static final int MSG_SYNC = 3;
    public static final int MSG_DATA = 4;
    public static final int MSG_COMPLETE = 5;
    public static final int MSG_FILE_REQUEST = 8;
    public static final int MSG_INIT_REQUEST = 9;

    private String uniqueId;
    private int packetCount;
    private int currentPacket;
    private ByteBuf photo;

    @Override
    protected Object decode(
            Channel channel, SocketAddress remoteAddress, Object msg) throws Exception {

        ByteBuf buf = (ByteBuf) msg;

        int type = buf.readUnsignedShort();

        switch (type) {
            case MSG_INIT:
                buf.readUnsignedShort(); // protocol id
                uniqueId = String.valueOf(buf.readLong());
                DeviceSession deviceSession = getDeviceSession(channel, remoteAddress, uniqueId);
                long settings = buf.readUnsignedInt();
                if (channel != null && deviceSession != null) {
                    ByteBuf response = Unpooled.buffer();
                    if (BitUtil.between(settings, 26, 28) > 0) {
                        response.writeShort(MSG_FILE_REQUEST);
                        String file = BitUtil.check(settings, 26) ? "%photof" : "%photor";
                        response.writeShort(file.length());
                        response.writeCharSequence(file, StandardCharsets.US_ASCII);
                    } else {
                        response.writeShort(MSG_COMPLETE);
                    }
                    channel.writeAndFlush(new NetworkMessage(response, remoteAddress));
                }
                break;
            case MSG_START:
                buf.readUnsignedShort(); // length
                packetCount = buf.readInt();
                currentPacket = 1;
                photo = Unpooled.buffer();
                if (channel != null) {
                    ByteBuf response = Unpooled.buffer();
                    response.writeShort(MSG_RESUME);
                    response.writeShort(4);
                    response.writeInt(currentPacket);
                    channel.writeAndFlush(new NetworkMessage(response, remoteAddress));
                }
                break;
            case MSG_DATA:
                buf.readUnsignedShort(); // length
                photo.writeBytes(buf, buf.readableBytes() - 2);
                if (currentPacket == packetCount) {
                    deviceSession = getDeviceSession(channel, remoteAddress);
                    Position position = new Position(getProtocolName());
                    position.setDeviceId(deviceSession.getDeviceId());
                    getLastLocation(position, null);
                    try {
                        position.set(Position.KEY_IMAGE, Context.getMediaManager().writeFile(uniqueId, photo, "jpg"));
                    } finally {
                        photo.release();
                        photo = null;
                    }
                    if (channel != null) {
                        ByteBuf response = Unpooled.buffer();
                        response.writeShort(MSG_INIT_REQUEST);
                        channel.writeAndFlush(new NetworkMessage(response, remoteAddress));
                    }
                    return position;
                } else {
                    currentPacket += 1;
                }
                break;
            default:
                break;
        }

        return null;
    }

}
