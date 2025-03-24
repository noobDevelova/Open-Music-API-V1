const AlbumsConstraints = pgm => ({
  id: {
    type: 'VARCHAR(50)',
    primaryKey: true,
    unique: true,
    notNull: true,
  },
  name: {
    type: 'TEXT',
    notNull: true,
  },
  year: {
    type: 'INT',
    notNull: true,
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

module.exports = AlbumsConstraints;
