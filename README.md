# PS99 API Wrapper
API Wrapper for the BIG Games Pet Simulator 99 API, for Node.

[![MIT License](https://img.shields.io/badge/License-GNU%20GPLv3-green.svg)](https://choosealicense.com/licenses/gpl-3.0/)


## Usage/Examples

```javascript
const ps99 = require('ps99');

// Example: Fetch collections
ps99.getCollections()
    .then(collections => {
        console.log('Collections:', collections);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Fetch details from a specific collection (e.g., "Pets")
ps99.getCollection('Pets')
    .then(collectionDetails => {
        console.log('Details for collection "Pets":', collectionDetails);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Fetch an overview of all the clans
ps99.getClans()
    .then(clans => {
        console.log('Clans:', clans);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Fetch details of a specific clan (e.g., "CAT")
ps99.getClanDetails('CAT')
    .then(clanDetails => {
        console.log('Details for clan "CAT":', clanDetails);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Check existence data for each item and pet in the game
ps99.checkExists()
    .then(existenceData => {
        console.log('Existence data:', existenceData);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Fetch RAP (Recent Average Price) data for each item and pet in the game
ps99.getRAP()
    .then(rapData => {
        console.log('RAP data:', rapData);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Fetch the latest clan battle, whether active or not
ps99.getActiveClanBattle()
    .then(clanBattle => {
        console.log('Latest clan battle:', clanBattle);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Example: Display a Roblox library asset as an image by proxying the request
const assetId = '14615650278'; // Example asset ID
ps99.getImage(assetId)
    .then(imageBlob => {
        // Do whatever with the image blob, no example code here.
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

```


## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

