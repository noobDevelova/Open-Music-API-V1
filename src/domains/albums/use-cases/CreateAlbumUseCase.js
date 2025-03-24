const Album = require('../entities/Album.entities');

class CreateAlbumUseCase {
  constructor(albumRepository) {
    this._albumRepository = albumRepository;
  }

  execute = async payload => {
    const album = new Album(payload);

    return this._albumRepository.addAlbum(album.getPayload());
  };
}

module.exports = CreateAlbumUseCase;
