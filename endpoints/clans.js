async function getClans(page, pageSize, sort, sortOrder) {
    const url = `https://biggamesapi.io/api/clans?page=${page}&pageSize=${pageSize}&sort=${sort}&sortOrder=${sortOrder}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== 'ok') {
            throw new Error('Failed to fetch clans');
        }

        return data.data;
    } catch (error) {
        throw new Error(`Error in getClans: ${error.message}`);
    }
}

module.exports = getClans;
