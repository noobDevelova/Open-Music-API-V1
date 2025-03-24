const SongConstraints = pgm => ({
  id: {
    type: 'VARCHAR(50)',
    primaryKey: true,
    unique: true,
    notNull: true,
  },
  title: {
    type: 'TEXT',
    notNull: true,
  },
  performer: {
    type: 'TEXT',
    notNull: true,
  },
  year: {
    type: 'INT',
    notNull: true,
  },
  genre: {
    type: 'TEXT',
    notNull: true,
  },
  duration: {
    type: 'INT',
    notNull: false,
  },
  album_id: {
    type: 'VARCHAR(50)',
    references: '"albums"',
    onDelete: 'CASCADE',
    notNull: false,
  },
  created_at: {
    type: 'TIMESTAMP',
    notNull: true,
    default: pgm.func('CURRENT_TIMESTAMP'),
  },
  updated_at: {
    type: 'TIMESTAMP',
    notNull: true,
    default: pgm.func('CURRENT_TIMESTAMP'),
  },
});

module.exports = SongConstraints;
