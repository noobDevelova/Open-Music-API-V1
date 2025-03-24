-- Clear existing data
TRUNCATE albums, songs CASCADE;

-- Insert albums
INSERT INTO albums (id, name, year, created_at, updated_at)
VALUES 
  ('album-1', 'Viva La Vida', 2008, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('album-2', 'X&Y', 2005, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('album-3', 'A Rush of Blood to the Head', 2002, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert songs
INSERT INTO songs (id, title, year, performer, genre, duration, album_id, created_at, updated_at)
VALUES
  ('song-1', 'Viva La Vida', 2008, 'Coldplay', 'Alternative Rock', 242, 'album-1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('song-2', 'Fix You', 2005, 'Coldplay', 'Alternative Rock', 295, 'album-2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('song-3', 'The Scientist', 2002, 'Coldplay', 'Alternative Rock', 309, 'album-3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);