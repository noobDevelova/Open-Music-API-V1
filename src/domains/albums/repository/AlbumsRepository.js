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
}

module.exports = AlbumRepository;
