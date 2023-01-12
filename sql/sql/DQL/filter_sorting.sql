-- @block Nested select query
SELECT *
FROM (
  SELECT *, extract (year from age(birthday)) AS age
  FROM users
) AS "subquery_with_age"
WHERE age > 30
;
-- @block Having
SELECT age, count(*)
FROM (
  SELECT extract(years from age(birthday)) AS age, *
  FROM users
) AS with_age
GROUP BY age
HAVING count(*) > 15
ORDER BY age ASC
;
-- @block Subquery hell
SELECT *
FROM (
  SELECT age, count(*) AS user_count
  FROM (
    SELECT extract(years from age(birthday)) AS age, *
    FROM users
  ) AS with_age
  GROUP BY age
ORDER BY age ASC
) AS with_count
WHERE user_count > 15
;
-- @block
SELECT id, name, category, price, manufacturer
FROM products
WHERE category = 'food'
ORDER BY price DESC
LIMIT 5 OFFSET 0
;
-- @block
SELECT *
FROM users
ORDER BY height ASC, birthday ASC
;
-- @block
SELECT *
FROM users
ORDER BY weight DESC, is_male ASC, first_name ASC, last_name ASC, email DESC
;
-- @block
SELECT *
FROM users
-- WHERE first_name LIKE 'I%'
-- WHERE first_name LIKE '%o%o%'
-- WHERE first_name LIKE '%r_'
WHERE first_name ILIKE '%R_'
;
-- @block
SELECT *
FROM users
-- WHERE first_name ~ '^I.*'
-- WHERE first_name ~* '^.*o.*o.*'
-- WHERE first_name ~ '^.*r.'
-- WHERE first_name ~* '^.*R.'
WHERE first_name !~* '^.*R.'
;
