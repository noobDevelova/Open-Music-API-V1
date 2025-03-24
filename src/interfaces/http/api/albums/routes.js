const routes = handler => [
  {
    method: 'GET',
    path: '/albums',
    handler: handler.getListAlbumsHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.editAlbumHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumHandler,
  },
  {
    method: 'POST',
    path: '/albums',
    handler: handler.createAlbumHandler,
  },
];

module.exports = routes;
