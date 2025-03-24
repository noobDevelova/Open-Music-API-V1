const { ALBUM_NOT_MEET_DATA_SPECIFICATION } = require('../../../commons');
const { AlbumPayloadSchema } = require('../../../commons/validator');

class NewAlbum {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, year } = payload;

    this.name = name;
    this.year = year;
  }

  _verifyPayload(payload) {
    const result = AlbumPayloadSchema.validate(payload);

    if (result.error) {
      throw new Error(ALBUM_NOT_MEET_DATA_SPECIFICATION);
    }
  }
}

module.exports = NewAlbum;
