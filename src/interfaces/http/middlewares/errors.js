const {
  ClientError,
  ResponseBuilder,

  INTERNAL_SERVER_ERROR,
} = require('../../../commons');

const errorHandler = {
  name: 'errors',
  version: '1.0.0',
  register: async server => {
    server.ext('onPreResponse', (request, h) => {
      const { response } = request;

      if (response instanceof Error) {
        if (response instanceof ClientError) {
          return ResponseBuilder.fail(h, {
            message: response.message,
          });
        }
        return ResponseBuilder.error(h, {
          message: INTERNAL_SERVER_ERROR,
        });
      }

      return h.continue;
    });
  },
};

module.exports = errorHandler;
