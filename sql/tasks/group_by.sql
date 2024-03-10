-- @block кількість товарів на складі
SELECT category, sum(quantity) AS sum_of_product_category
FROM products
GROUP BY category;

-- @block кількість проданих товарів
SELECT product_id, sum(quantity) AS sold_products_quantity
FROM orders_to_products
GROUP BY product_id
ORDER BY product_id ASC;

-- @block середня ціна товарів
SELECT category, avg(price) AS avg_price
FROM products
GROUP BY category;

-- @block ціна самого дешевого повербанка
SELECT min(price) AS lowest_powerstation_price
FROM products
WHERE category = 'powerstations';

-- @block максимальна ціна для кожного виробника
SELECT manufacturer, max(price) AS highest_product_price
FROM products
GROUP BY manufacturer
ORDER BY highest_product_price DESC;

-- @block загальна вартість викупу всього склада товарів
SELECT sum(price * quantity) AS total_products_price
FROM products;

-- @block користувач і кількість замовлень, що він створив
SELECT user_id, count(*)
FROM orders
GROUP BY user_id
ORDER BY user_id ASC;
