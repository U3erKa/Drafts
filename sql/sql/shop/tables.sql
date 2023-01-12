-- @block DROP
-- Either use CASCADE or delete in particular order
-- 1 : 1 requires CASCADE
DROP TABLE IF EXISTS orders_to_products;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

-- @block Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL CHECK(first_name != ''),
  last_name VARCHAR(255) NOT NULL CHECK(last_name != ''),
  email VARCHAR(255) NOT NULL CHECK(email != ''),
  password VARCHAR(255) NOT NULL CHECK(password != ''),
  phone_num VARCHAR(20) NOT NULL CHECK(phone_num != ''),
  birthday DATE CHECK(birthday < current_date),
  is_male BOOLEAN,
  height NUMERIC(3,2) CHECK (height > 0.2),
  weight SMALLINT CHECK (weight < 1500),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- @block Products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL CHECK(name != ''),
  description VARCHAR(2047) CHECK(description != ''),
  price NUMERIC(10,2) NOT NULL CHECK(price > 0),
  quantity INT NOT NULL CHECK(quantity >= 0),
  category VARCHAR(64) NOT NULL CHECK(category != ''),
  manufacturer VARCHAR(255) NOT NULL CHECK(manufacturer != ''),
  min_age SMALLINT CHECK(min_age > 0),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- @block Reviews
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  product_id INT NOT NULL REFERENCES products,
  rating_id INT UNIQUE,
  description text,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- @block Ratings
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  review_id INT NOT NULL UNIQUE REFERENCES reviews(id),
  rating NUMERIC(3,1) NOT NULL CHECK(rating >= 0 AND rating <= 10),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);
ALTER TABLE reviews
ADD FOREIGN KEY (rating_id) REFERENCES ratings(id);

-- @block Orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- @block Orders to Products
CREATE TABLE orders_to_products (
  order_id INT REFERENCES orders,
  product_id INT REFERENCES products,
  quantity INT NOT NULL CHECK(quantity > 0),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY(order_id, product_id)
);
