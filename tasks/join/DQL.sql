-- @block посчитайте стоимость каждого заказа
SELECT o.id, sum(price * otp.quantity)
FROM orders o
JOIN orders_to_products otp ON o.id = order_id
JOIN products p ON p.id = product_id
GROUP BY o.id
ORDER BY o.id ASC
;
-- @block количество категорий в конкретном заказе
SELECT order_id, count(category)
FROM products p
JOIN orders_to_products otp ON p.id = product_id
JOIN orders o ON o.id = order_id
GROUP BY order_id
ORDER BY order_id ASC
;
-- @block данные о товаре и в скольких заказах он есть
SELECT p.*, count(o.id)
FROM products p
JOIN orders_to_products otp ON p.id = product_id
JOIN orders o ON o.id = order_id
GROUP BY p.id
ORDER BY p.id ASC
;
