-- @conn Rozetka ripoff
-- @block EXISTS
SELECT (EXISTS (
  SELECT * FROM products
  -- WHERE id = 69420
  WHERE id = 69
))
;
-- @block JOIN replacement
SELECT * FROM users
WHERE EXISTS (
  SELECT * FROM orders
  WHERE user_id = users.id
)
;
-- @block IN / NOT IN
SELECT * FROM users
-- WHERE id IN (
WHERE id NOT IN (
  -- SELECT user_id FROM orders
  SELECT user_id FROM reviews
)
;
-- @block Users who made an order and did not leave review
SELECT users.* FROM users
JOIN orders ON user_id = users.id
WHERE users.id NOT IN (
  SELECT user_id FROM reviews
)
GROUP BY users.id
;
-- @block ANY / SOME
SELECT products.* FROM products
WHERE id = ANY (
-- WHERE id = SOME (
  SELECT product_id
  FROM orders_to_products
)
;
-- @block ALL, Orders which exceed present quantity
SELECT order_id FROM orders_to_products
WHERE quantity > ALL (
  SELECT quantity FROM products
)
;
-- @block Make order exceed its product quantity
UPDATE orders_to_products SET quantity = 50000
WHERE order_id = 1 AND product_id = 94
;
