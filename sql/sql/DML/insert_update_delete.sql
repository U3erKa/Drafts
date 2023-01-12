-- @block
-- pass
INSERT INTO cars
(model, year_of_production, vin_number, price, is_used, updated_at)
VALUES
('car_model_example2', 2021, 69421, 9999.99, false, '2023-12-29');
INSERT INTO cars
(model, year_of_production, vin_number, price, is_used, updated_at, created_at)
VALUES
('car_model_example', 2022, 69420, 19999.99, true, '2023-03-01', '2021-03-01');

-- @block
-- fail
INSERT INTO cars
(model, year_of_production, vin_number, price, is_used, updated_at)
VALUES
-- ('', 777, 69423, -1850, true, '3002-01-01');
(' ', 1977, 69423, 20000, true, '2001-01-01');

-- @block
SELECT * FROM cars;

-- @block
UPDATE cars SET color = 'red';

-- @block
UPDATE users
SET name = 'Anton Antonovich'
WHERE name = 'test';

-- @block
UPDATE users
SET height = 1.50;

-- @block
UPDATE users
SET weigth = 75, birthday = '03-03-1994'
WHERE id = 20;

-- @block
DELETE FROM users
WHERE id > 3 AND id < 1000
RETURNING id, name, email;

-- @block
DELETE FROM orders_to_products;

-- @block
TRUNCATE TABLE orders_to_products;
