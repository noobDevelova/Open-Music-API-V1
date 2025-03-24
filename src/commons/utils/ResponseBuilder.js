class ResponseBuilder {
  static success(h, { data = null, message = null, code = 200 }) {
    const response = {
      status: 'success',
    };

    if (message) response.message = message;
    if (data) response.data = data;

    return h.response(response).code(code);
  }

  static created(
    h,
    { data = null, message = 'Resource created successfully', code = 201 }
  ) {
    return this.success(h, { data, message, code });
  }

  static fail(h, { message, code = 400 }) {
    return h
      .response({
        status: 'fail',
        message,
      })
      .code(code);
  }

  static error(h, { message = 'Internal server error', code = 500 }) {
    return h
      .response({
        status: 'error',
        message,
      })
      .code(code);
  }

  static notFound(h, { message = 'Resource not found' }) {
    return this.fail(h, { message, code: 404 });
  }
}

module.exports = ResponseBuilder;
