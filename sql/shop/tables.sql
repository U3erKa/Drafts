-- @block Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL CHECK(name != ''),
  email VARCHAR(255) NOT NULL CHECK(email != ''),
  password VARCHAR(255) NOT NULL CHECK(password != ''),
  phone_num VARCHAR(20) NOT NULL CHECK(phone_num != ''),
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
  rating NUMERIC(2,1) NOT NULL CHECK(rating >= 0 AND rating <= 10),
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

-- @block DROP
DROP TABLE users CASCADE;