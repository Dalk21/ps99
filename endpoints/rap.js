async function getRAP() {
    const url = 'https://biggamesapi.io/api/rap';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== 'ok') {
            throw new Error('Failed to fetch RAP data');
        }

        return data.data;
    } catch (error) {
        throw new Error(`Error in getRAP: ${error.message}`);
    }
}

module.exports = getRAP;
