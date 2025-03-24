const ContainerProvider = require('../../../../infrastructure/container');
const { ResponseBuilder } = require('../../../../commons');

class AlbumsHandler {
  constructor() {
    const container = ContainerProvider.getInstance();
    this._getListAlbumsUseCase = container.get('getListAlbumsUseCase');
  }

  getListAlbumsHandler = async (request, h) => {
    const albums = await this._getListAlbumsUseCase.execute();

    return ResponseBuilder.success(h, { data: { albums } });
  };
}

module.exports = AlbumsHandler;
