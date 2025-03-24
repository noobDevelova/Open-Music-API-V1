const {
  ALBUM_NOT_MEET_DATA_SPECIFICATION,
  InvariantError,
} = require('../../../commons');
const {
  AlbumPayloadSchema,
} = require('../../../commons/validator/Album.schema');

class Album {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, year } = payload;

    this.name = name;
    this.year = year;
  }

  _verifyPayload = payload => {
    const result = AlbumPayloadSchema.validate(payload);

    if (result.error) {
      throw new InvariantError(ALBUM_NOT_MEET_DATA_SPECIFICATION);
    }
  };

  getPayload = () => ({
    name: this.name,
    year: this.year,
  });
}

module.exports = Album;
