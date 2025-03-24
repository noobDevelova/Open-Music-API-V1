const AlbumsHandler = require('./handler');
const albumsRoutes = require('./routes');

module.exports = {
  name: 'albums',
  version: '1.0.0',
  register: async server => {
    const albumsHandler = new AlbumsHandler();

    server.route(albumsRoutes(albumsHandler));
  },
};
