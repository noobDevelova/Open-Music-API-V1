class DeleteAlbumUseCase {
  constructor(albumRepository) {
    this._albumRepository = albumRepository;
  }

  execute = async id => this._albumRepository.deleteAlbum(id);
}

module.exports = DeleteAlbumUseCase;
