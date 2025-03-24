const { Pool } = require('pg');
const AlbumRepository = require('../../domains/albums/repository/AlbumsRepository');
const GetListAlbumsUseCase = require('../../domains/albums/use-cases/GetListAlbumsUseCase');

class Container {
  constructor() {
    this._services = new Map();
    this._singletons = new Map();
    this._pool = new Pool();

    this._registerRepositories();
    this._registerUseCases();
  }

  _registerRepositories = () => {
    this.register('pool', () => this._pool, true);

    this.register(
      'albumRepository',
      () => new AlbumRepository(this.get('pool')),
      true
    );
  };

  _registerUseCases = () => {
    this.register(
      'getListAlbumsUseCase',
      () => new GetListAlbumsUseCase(this.get('albumRepository')),
      true
    );
  };

  register = (name, factory, singleton = false) => {
    this._services.set(name, { factory, singleton });
  };

  get = name => {
    const service = this._services.get(name);

    if (!service) {
      throw new Error(`Service ${name} not found`);
    }

    if (service.singleton) {
      let instance = this._singletons.get(name);

      if (!instance) {
        instance = service.factory(this);
        this._singletons.set(name, instance);
      }

      return instance;
    }

    return service.factory(this);
  };
}

module.exports = Container;
