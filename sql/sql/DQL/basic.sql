-- @block 
SELECT *
FROM users
;
-- @block
SELECT first_name, birthday, password
FROM users
;
-- @block Very important function XD
SELECT 2 + 2 "sum"
;
-- @block
SELECT *
FROM users
WHERE height < 2
;
-- @block
SELECT *
FROM users
WHERE NOT is_male AND height = 1.50
;
-- @block
SELECT *
FROM users
WHERE first_name IN('Victoria', 'Julia')
;
-- @block
SELECT *
FROM users
WHERE weight BETWEEN 50 AND 90
;
-- @block Pagination
SELECT * FROM users
LIMIT 10 OFFSET 0
-- LIMIT 10 OFFSET 10
;
