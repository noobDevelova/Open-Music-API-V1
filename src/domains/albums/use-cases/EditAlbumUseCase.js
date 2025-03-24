const Album = require('../entities/Album.entities');

class EditAlbumUseCase {
  constructor(albumRepository) {
    this._albumRepository = albumRepository;
  }

  execute = async (id, payload) => {
    const album = new Album(payload);

    const updatedAlbum = {
      ...album.getPayload(),
      updated_at: new Date().toISOString(),
    };

    return this._albumRepository.editAlbum(id, updatedAlbum);
  };
}

module.exports = EditAlbumUseCase;
