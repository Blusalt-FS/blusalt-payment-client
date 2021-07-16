import axios from 'axios';

export default axios.create({
    baseURL: "https://wallets.blusalt.net" || process.env.BLUSALT_API_URL,
    headers: {
        Accept: 'application/json',
        'x-api-key': process.env.BLUSALT_API_KEY
    }
});
