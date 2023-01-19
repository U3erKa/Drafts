-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 01', 420, '2004-05-25', 'Ukraine',
999999, 'Director 1', '2012-01-13', '2022-03-04'),
('Car manufacturer 01', 10, '1800-01-01', 'Great Britain',
99999999.99, 'Director Dir', '1800-01-01', '1800-01-02');

-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 02', 0, '2004-05-25', 'Ukraine',
999999, 'Director Dir', '2012-01-13', '2022-03-04');

-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 03', 1, '1799-12-31', 'Loremium',
99999999.99, 'Director Dir', '1800-01-01', '1800-01-02');

-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 04', 1, '2004-05-25', '',
99999999.99, 'Director Dir', '1800-01-01', '1800-01-02');

-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 05', 1, '2004-05-25', 'Loremium',
999999990.99, 'Director Dir', '1800-01-01', '1800-01-02');

-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 06', 1, '2004-05-25', 'Loremium',
99999999.99, 'Director Dir', '', '1800-01-02');

-- @block
-- fail
INSERT INTO car_manufacturers
(manufacturer, num_of_employee, founded_at, native_country,
share, director, created_at, updated_at)
VALUES
('Car manufacturer 07', 1, '2004-05-25', 'Loremium',
99999999.99, 'Director Dir', '1800-01-01', 2022);

-- @block
