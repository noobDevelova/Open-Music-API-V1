class GetAlbumUseCase {
  constructor(albumRepository) {
    this._albumRepository = albumRepository;
  }

  execute = async id => this._albumRepository.getAlbum(id);
}

module.exports = GetAlbumUseCase;
