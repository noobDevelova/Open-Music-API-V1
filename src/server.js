const Hapi = require('@hapi/hapi');

const ContainerProvider = require('./infrastructure/container');
const EnvAdapter = require('./infrastructure/adapter/EnvAdapter');
const albumsPlugins = require('./interfaces/http/api/albums');
const errorHandler = require('./interfaces/http/middlewares/errors');

const init = async () => {
  ContainerProvider.getInstance();

  const server = Hapi.server({
    port: EnvAdapter.get('PORT'),
    host: EnvAdapter.get('HOST'),
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: errorHandler,
    },
    {
      plugin: albumsPlugins,
    },
  ]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
