-- database/schema.sql
-- TR DFS Realm Schema
-- This schema sets up the foundation for players, lineups, and chatter.

-- Table: players
CREATE TABLE IF NOT EXISTS players (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  team VARCHAR(10) NOT NULL,
  position VARCHAR(10) NOT NULL,
  salary INT NOT NULL,
  projection DECIMAL(6,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table: lineups
CREATE TABLE IF NOT EXISTS lineups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  total_salary INT NOT NULL,
  total_points DECIMAL(6,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Join table: lineup_players
CREATE TABLE IF NOT EXISTS lineup_players (
  id SERIAL PRIMARY KEY,
  lineup_id INT REFERENCES lineups(id) ON DELETE CASCADE,
  player_id INT REFERENCES players(id) ON DELETE CASCADE,
  slot VARCHAR(20) NOT NULL
);

-- Table: chatter (for Spirit-led news, insights, DFS chatter)
CREATE TABLE IF NOT EXISTS chatter (
  id SERIAL PRIMARY KEY,
  source VARCHAR(100),
  message TEXT NOT NULL,
  sentiment VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
