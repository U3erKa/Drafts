-- CREATE TABLE IF NOT EXISTS my_table();
-- DROP TABLE IF EXISTS my_table;

-- NUMERIC(6 + 2, 2)
-- NOT NULL UNIQUE is like PRIMARY KEY
-- CHECK insile () boolean logic

-- TODO RegEx or sth
-- @block
CREATE TABLE IF NOT EXISTS cars(
  -- id UUID PRIMARY KEY DEFAULT gen_randon_uuid (),
  id SMALLSERIAL PRIMARY KEY,
  model VARCHAR(128) NOT NULL CHECK (model != ''),
  year_of_production INT NOT NULL
  CHECK (year_of_production > 1900 AND year_of_production <= 2023),
  vin_number INT NOT NULL UNIQUE,
  price NUMERIC(8, 2) NOT NULL CHECK (price >= 0),
  is_used BOOLEAN NOT NULL,
  created_at DATE NOT NULL DEFAULT current_date
  CHECK (created_at > '1900-01-01' AND created_at <= current_date),
  updated_at DATE
  CHECK (updated_at > created_at),
  UNIQUE (model, year_of_production)
  -- PRIMARY KEY (model, year_of_production)
);

-- @block
DROP TABLE IF EXISTS cars;
