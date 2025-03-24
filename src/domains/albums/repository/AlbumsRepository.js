const { nanoid } = require('nanoid');
const { QueryBuilder } = require('../../../commons');
const ResultMapper = require('../../../commons/utils/ResultMapper');

class AlbumRepository {
  constructor(pool) {
    this._pool = pool;
  }

  getList = async () => {
    const query = QueryBuilder.select('albums', ['id', 'name', 'year']);

    const result = await this._pool.query(query);

    return result.rows.map(row => ResultMapper.objectToCamelCase(row));
  };

  getAlbum = async id => {
    const query = QueryBuilder.select('albums', ['id', 'name', 'year'], { id });
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      return null;
    }

    return ResultMapper.objectToCamelCase(result.rows[0]);
  };

  deleteAlbum = async id => {
    const query = QueryBuilder.delete('albums', { id });

    await this._pool.query(query);
  };

  editAlbum = async (id, data) => {
    const query = QueryBuilder.update('albums', data, { id });
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      return null;
    }

    return result.rows[0].id;
  };

  addAlbum = async data => {
    const id = `album-${nanoid(16)}`;
    const query = QueryBuilder.insert('albums', { id, ...data });

    const result = await this._pool.query(query);

    return result.rows[0].id;
  };
}

module.exports = AlbumRepository;
