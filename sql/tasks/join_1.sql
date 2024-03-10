-- @block вартість кожного замовлення
SELECT o.id, sum(price * otp.quantity)
FROM orders o
JOIN orders_to_products otp ON o.id = order_id
JOIN products p ON p.id = product_id
GROUP BY o.id
ORDER BY o.id ASC
;
-- @block кількість категорій в конкретному замовленні
SELECT order_id, count(DISTINCT category)
FROM products p
JOIN orders_to_products otp ON p.id = product_id
JOIN orders o ON o.id = order_id
GROUP BY order_id
ORDER BY order_id ASC
;
-- @block кількість категорій в конкретному замовленні (sub-query)
SELECT order_id, count(*)
FROM (
  SELECT order_id, category
  FROM products p
  JOIN orders_to_products otp ON p.id = product_id
  JOIN orders o ON o.id = order_id
  GROUP BY order_id, category
  ORDER BY order_id ASC
) AS with_unique_categories
GROUP BY order_id
;
-- @block дані про товар і в скількох замовлення він є
SELECT p.*, count(o.id)
FROM products p
JOIN orders_to_products otp ON p.id = product_id
JOIN orders o ON o.id = order_id
GROUP BY p.id
ORDER BY p.id ASC
;
