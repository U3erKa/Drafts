-- CREATE TABLE IF NOT EXISTS my_table();
-- DROP TABLE IF EXISTS my_table;

-- NUMERIC(6 + 2, 2)
CREATE TABLE IF NOT EXISTS cars(
  model VARCHAR(128),
  year_of_production INT,
  price NUMERIC(8, 2),
  is_used BOOLEAN,
  created_at DATE
);
