import axios from 'axios';

export default axios.create({
    baseURL: "https://wallets.blusalt.net",
    headers: {
        Accept: 'application/json',
        'x-api-key': process.env.BLUSALT_API_KEY
    }
});
