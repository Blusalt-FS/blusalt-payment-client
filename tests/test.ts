import { Wallet } from '../src';

process.env.BLUSALT_API_URL='https://wallets.blusalt.net';

const blusaltWallet = new Wallet("live_061b53cb88d868ab23b20c2b687e2169be22ca5f93cef83b51ade392d42a088746c808e381833272c26d03ac5a3234ad1637301161816");
(async () => {
    console.log('transfer');
    try{
        const response = await  blusaltWallet.transfer({
            wallet_reference: "ACC_fur7m0JalXWM",
            currency: "NGN",
            destination: {
                type: "bank",
                recipient: "0215874172",
                bank_code: "058"
            },
            amount: 200,
            narration: "james test"
        });

        // const response = await blusaltWallet.getWallet("ACC_fur7m0JalXWM");
        console.log(response);


    } catch (e) {
        console.log(e.response || e);
    }

})();
