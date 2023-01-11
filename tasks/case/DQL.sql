-- @block
SELECT id, price,
CASE
  WHEN price < 5000 THEN 'cheap'
  WHEN price < 15000 THEN 'moderate'
ELSE 'expensive'
END price_range
FROM products
;
-- @block
SELECT id, category,
CASE category
  WHEN 'powerstations' THEN TRUE
  WHEN 'lights' THEN TRUE
  WHEN 'phones' THEN TRUE
  WHEN 'keyboards' THEN TRUE
  ELSE FALSE
END is_electroharchuvannya
FROM products
;

-- 