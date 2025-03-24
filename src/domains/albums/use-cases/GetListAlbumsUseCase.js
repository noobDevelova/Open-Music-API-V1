class GetListAlbumsUseCase {
  constructor(albumRepository) {
    this._albumRepository = albumRepository;
  }

  execute = async () => this._albumRepository.getList();
}

module.exports = GetListAlbumsUseCase;
