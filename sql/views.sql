-- @conn Rozetka ripoff
-- @block CREATE VIEW
CREATE MATERIALIZED VIEW mat_orders_with_total_price AS (
-- CREATE VIEW orders_with_total_price AS (
  SELECT order_id, sum (otp.quantity * p.price) total
  FROM products p
  JOIN orders_to_products otp ON product_id = p.id
  GROUP BY order_id
)
;
-- @block Use created view
SELECT * FROM orders_with_total_price
WHERE total > (
  SELECT avg(total) FROM orders_with_total_price
)
;
-- @block Refresh
REFRESH MATERIALIZED VIEW mat_orders_with_total_price
;
