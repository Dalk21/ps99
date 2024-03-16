async function checkExists() {
    const url = 'https://biggamesapi.io/api/exists';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== 'ok') {
            throw new Error('Failed to check existence');
        }

        return data.data;
    } catch (error) {
        throw new Error(`Error in checkExists: ${error.message}`);
    }
}

module.exports = checkExists;
