async function getActiveClanBattle() {
    const url = 'https://biggamesapi.io/api/activeClanBattle';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== 'ok') {
            throw new Error('Failed to fetch active clan battle');
        }

        return data.data;
    } catch (error) {
        throw new Error(`Error in getActiveClanBattle: ${error.message}`);
    }
}

module.exports = getActiveClanBattle;
