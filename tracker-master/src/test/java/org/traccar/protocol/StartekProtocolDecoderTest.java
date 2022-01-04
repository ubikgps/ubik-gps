package org.traccar.protocol;

import org.junit.Test;
import org.traccar.ProtocolTest;
import org.traccar.model.Position;

public class StartekProtocolDecoderTest extends ProtocolTest {

    @Test
    public void testDecode() throws Exception {

        var decoder = new StartekProtocolDecoder(null);

        verifyPosition(decoder, text(
                "&&o142,860262050066062,000,27,,211111070826,V,28.653435,-106.077455,0,0.0,0,151,1412,918,0|0|4708|01402D19,6,0000001A,02,00,04C0|016C|0000|0000,1,,,BB"));

        verifyPosition(decoder, text(
                "&&W149,865429043319537,000,0,,211103013512,A,22.679003,114.045085,16,1.1,0,271,76,109075,460|0|249F|000010C5,19,0000003E,00,00,0A57|0168|0000|0000,1,0100000C"));

        verifyAttribute(decoder, text(
                "&&:23,860262050015424,129,OKA2"),
                Position.KEY_RESULT, "129,OK");

        verifyPosition(decoder, text(
                "&&X152,861157040151686,000,18,,210907163833,A,10.232715,-67.880423,11,1.4,0,275,437,34804,734|2|3EE4|00579406,28,00000015,00,00,0000|017D|0000|0000,1,010000,,9A"));

        verifyPosition(decoder, text(
                "&&o125,861157040554384,000,0,,210702235150,A,27.263505,153.037061,11,1.2,0,0,31,5125,505|1|7032|8C89802,20,0000002D,00,00,01E2|019DF0"));

        verifyAttribute(decoder, text(
                "&&a152,860262050010565,000,53,8F5300,210528015706,A,-38.229746,145.043446,6,1.5,0,285,84,2102994,505|1|306E|082D6101,31,0000003D,02,02,04C0|01A0|0000|0000,1,,DC"),
                Position.KEY_DRIVER_UNIQUE_ID, "8F5300");

        verifyPosition(decoder, text(
                "&&>141,860262050010565,000,36,,210407094323,V,-38.229711,145.043161,0,0.0,0,0,0,14222,505|1|306E|082D6115,24,00000039,00,00,04C0|0164|0000|0000,1,,41"));

        verifyPosition(decoder, text(
                "&&A147,021104023195429,000,0,,180106093046,A,22.646430,114.065730,8,0.9,54,86,76,326781,460|0|27B3|0EA7,27,0000000F,02,01,04E2|018C|01C8|0000,1,0104B0,01013D|02813546"));

        verifyPosition(decoder, text(
                "&&y139,860262050009146,000,0,,210323131512,A,22.678655,114.046223,14,1.1,0,231,71,5,460|0|249F|0099C257,28,0000003D,00,00,0493|0199|0000|0000,1,,33"));

    }

}
