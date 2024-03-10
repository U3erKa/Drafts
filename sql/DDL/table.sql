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

-- @block
ALTER TABLE cars
ADD COLUMN color VARCHAR (64),
ADD COLUMN fuel_capacity NUMERIC (5,2) NOT NULL DEFAULT 2.0;

-- @block
ALTER TABLE cars
ADD COLUMN fuel_capacity2 NUMERIC (5,2) NOT NULL DEFAULT 2.0;

-- @block
ALTER TABLE cars
DROP COLUMN fuel_capacity1,
DROP COLUMN fuel_capacity2;
-- @block
ALTER TABLE cars
ADD UNIQUE (color);

-- @block
ALTER TABLE cars
ADD CHECK (color != '');

-- @block
ALTER TABLE cars
ALTER COLUMN color SET NOT NULL;

-- @block
ALTER TABLE cars
ADD CONSTRAINT "red_sus" CHECK (color != 'red');

-- @block
ALTER TABLE cars
DROP CONSTRAINT red_sus;

-- @block
ALTER TABLE cars
ALTER COLUMN color DROP NOT NULL;

-- @block
ALTER TABLE cars
ALTER COLUMN color SET DEFAULT 'green';

-- @block
ALTER TABLE cars
ALTER COLUMN color DROP DEFAULT;

-- @block
ALTER TABLE cars
-- can use USING
ALTER COLUMN color TYPE VARCHAR (16);

-- @block
ALTER TABLE autos
RENAME TO cars;

-- @block
ALTER TABLE cars
RENAME COLUMN colour TO color;
