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
  ALBUM_UPDATED,
  ALBUM_CREATED,
  ALBUM_DELETED,

  SONG_NOT_FOUND,
  SONG_NOT_MEET_DATA_SPECIFICATION,

  INTERNAL_SERVER_ERROR,
  FAIL_TO_DELETE,
  FAIL_TO_UPDATE,
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
  ALBUM_UPDATED,
  ALBUM_DELETED,
  ALBUM_CREATED,

  SONG_NOT_FOUND,
  SONG_NOT_MEET_DATA_SPECIFICATION,

  INTERNAL_SERVER_ERROR,
  FAIL_TO_DELETE,
  FAIL_TO_UPDATE,
};
