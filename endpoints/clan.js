async function getClanDetails(clanName) {
    const url = `https://biggamesapi.io/api/clan/${clanName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== 'ok') {
            throw new Error(`Failed to fetch details for clan '${clanName}'`);
        }

        return data.data;
    } catch (error) {
        throw new Error(`Error in getClanDetails: ${error.message}`);
    }
}

module.exports = getClanDetails;
