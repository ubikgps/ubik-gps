package org.traccar.protocol;

import org.junit.Test;
import org.traccar.ProtocolTest;

public class Xexun2FrameDecoderTest extends ProtocolTest {

    @Test
    public void testDecode() throws Exception {

        var decoder = new Xexun2FrameDecoder();

        verifyFrame(
                binary("faaf0014000286147503139003400032f2b001002f4260b0d6a0008019104a3378323130333135317c323130333132303100704020308715758089502023015648643670faaf"),
                decoder.decode(null, null, binary("faaf0014000286147503139003400032f2b001002f4260b0d6a0008019104a3378323130333135317c323130333132303100704020308715758089502023015648643670faaf")));

    }

}
