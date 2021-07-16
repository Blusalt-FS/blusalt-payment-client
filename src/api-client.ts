import axios from 'axios';

export default axios.create({
    baseURL: process.env.BLUSALT_API_URL || "https://wallets.blusalt.net",
    headers: {
        Accept: 'application/json',
        'x-api-key': process.env.BLUSALT_API_KEY
    }
});
