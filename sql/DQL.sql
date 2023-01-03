-- @block
SELECT *
FROM users;

-- @block
SELECT *
FROM users
WHERE height < 2;

-- @block
SELECT *, extract (year from age(birthday)) 
FROM users
WHERE extract (year from age(birthday)) > 30;
