const ContainerProvider = require('../../../../infrastructure/container');
const {
  ResponseBuilder,
  ALBUM_NOT_FOUND,
  ALBUM_UPDATED,
  ALBUM_DELETED,
  ALBUM_CREATED,
  FAIL_TO_DELETE,
  FAIL_TO_UPDATE,
} = require('../../../../commons');

class AlbumsHandler {
  constructor() {
    const container = ContainerProvider.getInstance();

    this._getListAlbumsUseCase = container.get('getListAlbumsUseCase');
    this._getAlbumUseCase = container.get('getAlbumUseCase');
    this._deleteAlbumUseCase = container.get('deleteAlbumUseCase');
    this._editAlbumUseCase = container.get('editAlbumUseCase');
    this._createAlbumUseCase = container.get('createAlbumUseCase');
  }

  getListAlbumsHandler = async (request, h) => {
    const albums = await this._getListAlbumsUseCase.execute();

    return ResponseBuilder.success(h, { data: { albums } });
  };

  getAlbumHandler = async (request, h) => {
    const { id } = request.params;
    const album = await this._getAlbumUseCase.execute(id);

    if (!album) {
      return ResponseBuilder.notFound(h, { message: ALBUM_NOT_FOUND });
    }

    return ResponseBuilder.success(h, { data: { album } });
  };

  deleteAlbumHandler = async (request, h) => {
    const { id } = request.params;
    const album = await this._getAlbumUseCase.execute(id);

    if (!album) {
      return ResponseBuilder.notFound(h, {
        message: `${FAIL_TO_DELETE} ${ALBUM_NOT_FOUND}`,
      });
    }

    await this._deleteAlbumUseCase.execute(id);

    return ResponseBuilder.success(h, {
      message: ALBUM_DELETED,
    });
  };

  editAlbumHandler = async (request, h) => {
    const { id } = request.params;
    const album = await this._getAlbumUseCase.execute(id);

    if (!album) {
      return ResponseBuilder.notFound(h, {
        message: `${FAIL_TO_UPDATE} ${ALBUM_NOT_FOUND}`,
      });
    }

    await this._editAlbumUseCase.execute(id, request.payload);

    return ResponseBuilder.success(h, {
      message: ALBUM_UPDATED,
    });
  };

  createAlbumHandler = async (request, h) => {
    const albumId = await this._createAlbumUseCase.execute(request.payload);

    return ResponseBuilder.created(h, {
      data: { albumId },
      message: ALBUM_CREATED,
    });
  };
}

module.exports = AlbumsHandler;
