# blusalt-payment-client

## Installation
```shell
npm i @blusalt/blusalt-payment-client
```

## Authentication
Please set an environment `BLUSALT_API_KEY` containing your blusalt API key

## Wallet
```typescript
import blusalt from '@blusalt/blusalt-payment-client';

const wallet = await blusalt.wallet.createWallet({
    wallet_reference: "reference",
    currency: "NGN",
    type: "bank",
    customer: {
        gender: "M",
        first_name: "John",
        last_name: "Doe",
        middle_name: "John",
        email: "johndoe@gmail.com",
        mobile_no: "2348023431321"
    }
});

```
