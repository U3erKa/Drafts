-- @block Bad example, intersect-ish, blazingly SLOW
-- SELECT a.x, y, e
SELECT *
FROM a, b
WHERE a.x = b.x
;
-- @block
-- SELECT users.id, orders.id
-- SELECT email, orders.id AS "Order id"
SELECT email, orders.*
FROM users, orders
WHERE users.id = user_id
;
-- @block Join (INNER by default)
SELECT email, orders.*
FROM orders
JOIN users
ON user_id = users.id
;
-- @block Join reviews and ratings
SELECT *
FROM ratings
JOIN reviews
ON reviews.id = review_id
;
-- @block Products in order.id = 1
SELECT p.name, category, manufacturer
FROM orders AS o
JOIN orders_to_products AS otp
-- INNER JOIN orders_to_products AS otp
ON o.id = otp.order_id
JOIN products AS p
ON p.id = otp.product_id
WHERE o.id = 1
;
-- @block
SELECT o.*
FROM orders o
JOIN orders_to_products otp ON o.id = otp.order_id
JOIN products p ON p.id = otp.product_id
WHERE category = 'keyboards'
;
-- @block
SELECT manufacturer, count(manufacturer)
FROM products p
JOIN orders_to_products otp ON p.id = product_id
JOIN orders o ON o.id = order_id
WHERE order_id = 1
GROUP BY manufacturer
;
-- @block Show all users (left side) and their orders (right side), if any
-- SELECT *
SELECT u.id, count(o.id)
FROM users u
LEFT JOIN orders o
-- LEFT OUTER JOIN orders o
ON u.id = o.user_id
-- This WHERE make it LEFT EXCLUSIVE join
-- WHERE o.user_id IS NULL
GROUP BY u.id
ORDER BY u.id DESC
;
-- @block Show all orders (right side), if any and their users (left side)
SELECT u.id, count(o.id)
FROM orders o
RIGHT JOIN users u
ON u.id = o.user_id
-- This WHERE make it RIGHT EXCLUSIVE join
-- WHERE o.user_id IS NULL
GROUP BY u.id
ORDER BY u.id DESC
;
-- @block Show all users (left side), if any and their orders (right side), if any
SELECT
FROM users u
FULL JOIN orders o ON u.id = o.user_id
-- This WHERE makes it FULL EXCLUSIVE join
-- WHERE u.id IS NULL OR o.user.id IS NULL
ORDER BY u.id DESC
;
