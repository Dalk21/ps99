// index.js

const getCollections = require('./endpoints/collections');
const getCollection = require('./endpoints/collection');
const getClans = require('./endpoints/clans');
const getClanDetails = require('./endpoints/clan');
const checkExists = require('./endpoints/exists');
const getRAP = require('./endpoints/rap');
const getActiveClanBattle = require('./endpoints/activeClanBattle');
const getImage = require('./endpoints/image');

module.exports = {
    getCollections,
    getCollection,
    getClans,
    getClanDetails,
    checkExists,
    getRAP,
    getActiveClanBattle,
    getImage
};
