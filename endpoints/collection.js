async function getCollection(collectionName) {
    try {
        const collectionsResponse = await fetch('https://biggamesapi.io/api/collections');
        const collectionsData = await collectionsResponse.json();
        
        if (!collectionsResponse.ok || collectionsData.status !== 'ok') {
            throw new Error('Failed to fetch collections');
        }
        
        const availableCollections = collectionsData.data;
        if (!availableCollections.includes(collectionName)) {
            throw new Error(`Collection '${collectionName}' not found`);
        }
        
        const collectionResponse = await fetch(`https://biggamesapi.io/api/collection/${collectionName}`);
        const collectionData = await collectionResponse.json();
        
        if (!collectionResponse.ok || collectionData.status !== 'ok') {
            throw new Error(`Failed to fetch details for collection '${collectionName}'`);
        }

        return collectionData.data;
    } catch (error) {
        throw new Error(`Error in getCollection: ${error.message}`);
    }
}

module.exports = getCollection;
