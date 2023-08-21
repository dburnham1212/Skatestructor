DROP TABLE IF EXISTS challenges CASCADE;

-- CREATE TRICK INSTRUCTIONS
CREATE TABLE challenges (
  id SERIAL PRIMARY KEY,
  trick_id INTEGER NOT NULL REFERENCES tricks(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(1000) NOT NULL
);