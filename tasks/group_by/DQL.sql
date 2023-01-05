-- @block количество товаров на складе
SELECT category, sum(quantity) AS sum_of_product_category 
FROM products
GROUP BY category;

-- @block количество проданных товаров
SELECT product_id, sum(quantity) AS sold_products_quantity
FROM orders_to_products
GROUP BY product_id
ORDER BY product_id ASC;

-- @block средняя цена товаров
SELECT category, avg(price) AS avg_price
FROM products
GROUP BY category;

-- @block Цена самого дешевого повербанка
SELECT min(price) AS lowest_powerstation_price
FROM products
WHERE category = 'powerstations';

-- @block Максимальная цена для каждого производителя
SELECT manufacturer, max(price) AS highest_product_price
FROM products
GROUP BY manufacturer
ORDER BY highest_product_price DESC;

-- @block Общая стоимость выкупа всего склада товаров
SELECT sum(price * quantity) AS total_products_price
FROM products;

-- @block пользователь и количество заказов которое он совершил
SELECT user_id, count(*)
FROM orders
GROUP BY user_id
ORDER BY user_id ASC;
