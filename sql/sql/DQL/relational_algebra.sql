-- @block
CREATE TABLE a(
  x CHAR(10),
  y INT
)
;
-- @block
CREATE TABLE b(
  x CHAR(10),
  e BOOLEAN
)
;
-- @block DROP
DROP TABLE a
;
DROP TABLE b
;
-- @block
INSERT INTO a
(x, y)
VALUES
('aaa', 10),
('aab', 11),
('aac', 12),
('aba', 21),
('abb', 22),
('bbb', 29),
('caa', 315)
;
-- @block
INSERT INTO b
(x, e)
VALUES
('ccc', false),
('cbc', true),
('acc', true),
('aaa', true),
('aba', false)
;
-- @block Cartesian product
SELECT * FROM a, b
;
-- @block Union
SELECT x FROM a
UNION
SELECT x FROM b
;
-- @block Intersect
SELECT x FROM a
INTERSECT
SELECT x FROM b
;
-- @block Intersect user's orders
SELECT id FROM users
INTERSECT
SELECT user_id FROM orders
;
-- @block Except
SELECT x FROM a
EXCEPT
SELECT x FROM b
;
-- @block Except user's orders
SELECT id FROM users
EXCEPT
SELECT user_id FROM orders
;
-- @block Except order's users
SELECT id FROM users
EXCEPT
SELECT user_id FROM orders
;
