-- @block
SELECT *
FROM users;

-- @block
SELECT first_name, birthday, password
FROM users;

-- @block Very important function XD
SELECT 2 + 2 "sum";

-- @block
SELECT *
FROM users
WHERE height < 2;

-- @block
SELECT *, extract (year from age(birthday)) AS age
FROM users
WHERE extract (year from age(birthday)) > 30;

-- @block
SELECT *
FROM users
WHERE NOT is_male AND height = 1.50;

-- @block
SELECT *
FROM users
WHERE first_name IN('Victoria', 'Julia');

-- @block
SELECT *
FROM users
WHERE weight BETWEEN 50 AND 90;

-- @block Nested select query
SELECT *
FROM (
  SELECT *, extract (year from age(birthday)) AS age
  FROM users
) AS "subquery_with_age"
WHERE age > 30;

-- @block Pagination
SELECT * FROM users
LIMIT 10 OFFSET 0;
-- LIMIT 10 OFFSET 10;

-- @block
SELECT
avg (extract (year from age(birthday))) as "Average age"
FROM users;

-- @block
SELECT min (salary) "Mininal salary"
FROM workers;

-- @block
SELECT count (*) FROM users
WHERE is_male;

