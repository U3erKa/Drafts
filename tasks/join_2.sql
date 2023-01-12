-- @block показать все отзывы и оценки
SELECT rv.id, user_id, product_id, description, rating
FROM reviews rv
JOIN ratings rt ON rt.id = rv.rating_id
;
-- @block количество заказов каждого пользователя и его имя и фамилию
SELECT u.id, u.first_name, u.last_name, count(o.id)
FROM orders o
JOIN users u ON u.id = user_id
-- RIGHT JOIN users u ON u.id = user_id
GROUP BY u.id
ORDER BY u.id ASC
;
-- @block данные о пользователе, товаре который он купил и его отзыв с рейтингом
SELECT u.id user_id, u.first_name, u.last_name, p.id product_id,
  p.name, p.manufacturer, rv.description review, rt.rating
FROM users u
JOIN reviews rv ON u.id = rv.user_id
JOIN ratings rt ON rv.id = rt.review_id
JOIN products p ON p.id = rv.product_id
;
-- @block найти самый популярный товар (находится в наибольшем количестве заказов)
SELECT product_id, count(product_id) orders_count
FROM orders_to_products otp
GROUP BY product_id
ORDER BY orders_count DESC
LIMIT 1 OFFSET 0
;
-- @block все товары с максимальной оценкой отзыва и количество таких отзывов
SELECT product_id, count(rv) positive_reviews_count
FROM ratings rt
JOIN reviews rv ON rt.id = rv.rating_id
-- WHERE rt.rating >= 9
WHERE rt.rating = (
  SELECT max(rating)
  FROM ratings
)
GROUP BY product_id
ORDER BY positive_reviews_count DESC
;
-- @block пользователи и количество купленных ими уникальных товаров (DISTINCT)
SELECT u.*, count(DISTINCT p.name)
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN orders_to_products otp ON o.id = otp.order_id
JOIN products p ON p.id = otp.product_id
GROUP BY u.id
ORDER BY u.id ASC
;
-- @block пользователи и количество купленных ими уникальных товаров (подзапросы)
SELECT id user_id, count(*)
FROM (
  SELECT u.*
  FROM users u
  JOIN orders o ON u.id = o.user_id
  JOIN orders_to_products otp ON o.id = otp.order_id
  JOIN products p ON p.id = otp.product_id
  GROUP BY p.id, u.id
  ORDER BY u.id ASC
) AS users
GROUP BY user_id
;
-- @block **все заказы со стоимостью заказа выше средней стоимости заказа (подзапросы) (Write Everything Twice)
SELECT *
FROM (
  SELECT order_id, sum (otp.quantity * p.price) total
  FROM products p
  JOIN orders_to_products otp ON product_id = p.id
  GROUP BY order_id
) orders_with_total_price
WHERE total > (
  SELECT avg(total)
  FROM (
    SELECT order_id, sum (otp.quantity * p.price) total
    FROM products p
    JOIN orders_to_products otp ON product_id = p.id
    GROUP BY order_id
  ) as orders_with_total_price
)
;
-- @block **все заказы со стоимостью заказа выше средней стоимости заказа (WITH)
WITH orders_with_total_price AS (
  SELECT order_id, sum (otp.quantity * p.price ) total
  FROM products p
  JOIN orders_to_products otp ON product_id = p.id
  GROUP BY order_id
), avg_order_price AS (
  SELECT avg(total) FROM orders_with_total_price
)
SELECT * FROM orders_with_total_price
WHERE total > (
  SELECT * FROM avg_order_price
)
;
