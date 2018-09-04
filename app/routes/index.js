const galleryRoutes = require('./gallery_routes');

module.exports = function(app, db) {
    galleryRoutes(app, db);
};