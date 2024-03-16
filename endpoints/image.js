async function getImage(assetId) {
    const url = `https://biggamesapi.io/image/${assetId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        return response.blob();
    } catch (error) {
        throw new Error(`Error in getImage: ${error.message}`);
    }
}

module.exports = getImage;
