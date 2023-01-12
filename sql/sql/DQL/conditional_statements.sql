-- @block CASE if-else
SELECT first_name, last_name, email, is_male,
CASE
  -- WHEN is_male = TRUE THEN 'male'
  WHEN is_male THEN 'male'
  WHEN NOT is_male THEN 'female'
  -- ELSE 'female'
END gender
FROM users
;
-- @block CASE switch-case
SELECT first_name, last_name, email, is_male,
CASE is_male
  WHEN TRUE THEN 'male'
  WHEN FALSE THEN 'female'
  -- WHEN NOT TRUE THEN 'female'
END gender
FROM users
;
-- @block
SELECT first_name, last_name, email,
CASE is_male
  WHEN TRUE THEN (
    CASE extract (YEAR FROM age(birthday)) >= 40
    WHEN TRUE THEN 'adult male'
    WHEN FALSE THEN 'child boy'
    END
  )
  WHEN FALSE THEN (
    CASE extract (YEAR FROM age(birthday)) >= 40
    WHEN TRUE THEN 'adult female'
    WHEN FALSE THEN 'child girl'
    END
  )
END gender,
is_male
FROM users
;
-- @block
SELECT COALESCE(min_age, 0), * FROM products
;
-- @block
SELECT NULLIF(2, 2)
-- SELECT NULLIF(2, 4)
-- SELECT NULLIF(null, 2)
;
-- @block
SELECT GREATEST(1, 2, 5, 10, 4)
;
-- @block
SELECT LEAST(1, 2, 5, 10, 0, 4)
;
