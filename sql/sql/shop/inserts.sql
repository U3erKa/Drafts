-- @block Users
INSERT INTO users
(name, email, password, phone_num)
VALUES
('test subject 1', 'test1@example.com', 'sdkjhwe78i9u34kjhk', '0987654321'),
('test subject 2', 'test2@example.com', 'dfghwe98iuwebf34fg', '0123456789'),
('test subject 3', 'test3@example.com', 'elrkhwr908u34riouh', '0657483901');

-- @block Products
INSERT INTO products
(name, price, quantity, manufacturer, min_age)
VALUES
('Cat', 999999, 1, 'best pets co.', NULL),
('Teapot', 100, 10, 'loremium', NULL),
('Wine', 1000, 100, 'wine company', 18);

-- @block Orders
INSERT INTO orders
(user_id)
VALUES
(1),
(2),
(3);

-- @block Orders to Products
INSERT INTO orders_to_products
(order_id, product_id, quantity)
VALUES
(1, 1, 1),
(2, 3, 5),
(3, 3, 15),
(4, 2, 3),
(4, 3, 30);

-- @block Reviews
INSERT INTO reviewws
(user_id, product_id, description)
VALUES
(1, 4, 'good review 1'),
(3, 1, 'bad review 2');

-- @block Ratings
INSERT INTO ratings
(review_id, rating)
VALUES
(1, 9.9),
(3, 1);

UPDATE reviews SET rating_id = 1 WHERE id = 1;
UPDATE reviews SET rating_id = 2 WHERE id = 2;