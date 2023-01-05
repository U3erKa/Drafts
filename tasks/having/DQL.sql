-- @block
SELECT *
FROM (
  SELECT manufacturer, sum(quantity) AS quantity
  FROM products
  GROUP BY manufacturer
  ORDER BY quantity ASC
) AS with_quantity
WHERE quantity > 200000
;
-- @block
SELECT manufacturer, sum(quantity) AS quantity
FROM products
GROUP BY manufacturer
HAVING sum(quantity) > 200000
ORDER BY quantity ASC
;