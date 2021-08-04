import { Wallet } from '../src';

const blusaltWallet = new Wallet();
(async () => {
    console.log('create wallet');
    try{
        const wallet =  await blusaltWallet.createWallet({
            wallet_reference: "te33st",
            type: "bank",
            currency: "NGN",
            customer: {
                bvn: "12345554444",
                email: "jj@gmail.com",
                first_name: "dd",
                gender: "M",
                last_name: "d",
                middle_name: "d",
                mobile_no: "08165652255",
            }
        });
        console.log(wallet.bank.bank_name);
        console.log(wallet.bank.bank_code);

    } catch (e) {
        console.log(e.response || e);
    }

})();
