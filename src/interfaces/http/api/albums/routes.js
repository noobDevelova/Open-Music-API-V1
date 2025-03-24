const routes = handler => [
  {
    method: 'GET',
    path: '/albums',
    handler: handler.getListAlbumsHandler,
  },
];

module.exports = routes;
