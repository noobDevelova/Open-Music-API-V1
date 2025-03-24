const SongPayloadSchema = require('./validator/Song.schema');
const AlbumPayloadSchema = require('./validator/Album.schema');
const QueryBuilder = require('./utils/QueryBuilder');
const ResponseBuilder = require('./utils/ResponseBuilder');

const NotFoundError = require('./exceptions/NotFoundError');
const InvariantError = require('./exceptions/InvariantError');
const ClientError = require('./exceptions/ClientError');

const {
  ALBUM_NOT_FOUND,
  ALBUM_NOT_MEET_DATA_SPECIFICATION,
  SONG_NOT_FOUND,
  SONG_NOT_MEET_DATA_SPECIFICATION,
  INTERNAL_SERVER_ERROR,
} = require('./constants');

module.exports = {
  SongPayloadSchema,
  AlbumPayloadSchema,
  QueryBuilder,
  ResponseBuilder,

  NotFoundError,
  InvariantError,
  ClientError,

  ALBUM_NOT_FOUND,
  ALBUM_NOT_MEET_DATA_SPECIFICATION,
  SONG_NOT_FOUND,
  SONG_NOT_MEET_DATA_SPECIFICATION,
  INTERNAL_SERVER_ERROR,
};
