import { Wallet } from '../src';

process.env.BLUSALT_API_URL='https://dev-wallets.blusalt.net';

const blusaltWallet = new Wallet("test_340cddcc56721391c4484497e8bb925114c7f07f2b1c5a8abd54131b60a4d94964368b327ac97f901938b5827b998cb01619185808653");
(async () => {
    console.log('create wallet');
    try{
        const wallet = await blusaltWallet.getWallet("ffd33d");
        // const wallet =  await blusaltWallet.createWallet({
        //     wallet_reference: "ffd33",
        //     type: "bank",
        //     currency: "NGN",
        //     customer: {
        //         bvn: "12345554444",
        //         email: "jj@gmail.com",
        //         first_name: "dd",
        //         gender: "M",
        //         last_name: "d",
        //         middle_name: "d",
        //         mobile_no: "08165652255",
        //     }
        // });
        console.log(wallet)
        console.log(wallet.bank.bank_name);
        console.log(wallet.bank.bank_code);

    } catch (e) {
        console.log(e.response || e);
    }

})();
