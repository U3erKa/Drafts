-- @block
CREATE TABLE car_manufacturers (
  id SERIAL PRIMARY KEY,
  manufacturer VARCHAR (128) NOT NULL UNIQUE,
  CHECK (manufacturer != ''),
  num_of_employee INT NOT NULL,
  CHECK (num_of_employee > 0),
  founded_at DATE NOT NULL,
  CHECK (founded_at >= '1800-01-01' AND founded_at <= current_date),
  native_country VARCHAR (64) NOT NULL,
  CHECK (native_country != ''),
  share NUMERIC(10, 2) NOT NULL,
  CHECK (share > 0),
  director VARCHAR (128) NOT NULL,
  CHECK (director != ''),
  created_at DATE NOT NULL DEFAULT current_date,
  CHECK (created_at >= '1800-01-01' AND created_at <= current_date),
  updated_at DATE
  CHECK (created_at < updated_at)
);

-- @block
DROP TABLE IF EXISTS car_manufacturers;

-- @block
SELECT * FROM car_manufacturers;

-- @block
