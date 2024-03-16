// collections.js

const axios = require('axios');

async function getCollections() {
    try {
        const response = await axios.get('https://biggamesapi.io/api/collections');
        if (response.data.status === 'ok') {
            return response.data.data;
        } else {
            throw new Error('Failed to fetch collections');
        }
    } catch (error) {
        throw new Error(`Error in getCollections: ${error.message}`);
    }
}

module.exports = getCollections;
