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
SELECT min (weight) "Mininal weight"
FROM users;

-- @block
SELECT max (weight) "Maximum weight"
FROM users;

-- @block
SELECT sum (height) "Sum of all user's height"
FROM users;

-- @block
SELECT sum (2 + 2), count(*)
FROM users;

-- @block
SELECT count (*) FROM users
WHERE is_male;

-- @block
SELECT is_male, count (*) as "amount of users"
FROM users;

-- @block
SELECT count (is_male)
FROM users
WHERE NOT is_male;

-- @block
SELECT count (is_male)
FROM users;

-- @block
SELECT first_name || ' ' || last_name AS full_name, *
FROM users;

-- @block
SELECT concat(first_name, ' ', last_name) AS full_name, *
FROM users;

-- @block
SELECT *
FROM (
  SELECT id, concat(first_name, ' ', last_name) AS full_name
  FROM users
) AS with_full_name
WHERE length(full_name) > 16;
-- WHERE char_length(full_name) > 16;

-- @block
SELECT avg(height) AS avg_height_male
FROM users
WHERE is_male;

-- @block
SELECT avg(height) AS avg_height_female
FROM users
WHERE NOT is_male;

-- @block
SELECT is_male, avg(weight) AS avg_weight, avg(height) AS avg_height
FROM users
GROUP BY is_male;
