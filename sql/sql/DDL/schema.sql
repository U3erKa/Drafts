-- @conn Rozetka ripoff
-- @block
CREATE SCHEMA work
;
-- @block
CREATE TABLE work.departments(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)
;
-- @block
CREATE TABLE work.workers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  salary DECIMAL(9,2) NOT NULL CHECK(salary > 0),
  department_id INT NOT NULL REFERENCES work.departments,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)
;
-- @block
INSERT INTO work.departments ("name")
VALUES
('SALES'),
('BA'),
('HR'),
('IT'),
('QA')
;
-- @block
INSERT INTO work.workers ("name", "salary", "department_id")
VALUES
('Test Testenko', 5000, 4),
('John Doe', 1750, 1),
('Anton Antonenko', 1350, 1),
('Vodotrav Kurilenko', 2000, 2),
('Loremium Ipsumus', 200, 5),
('Al Coholic', 500, 3),
('Intern Internovich', 200, 4)
;
-- @block
SELECT d.name, count(w.id) workers_in_department
FROM work.departments d
JOIN work.workers w ON d.id = w.department_id
GROUP BY d.id
;
-- @block
SELECT w.name "Worker name", salary, d.name "Department name"
FROM work.departments d
JOIN work.workers w ON d.id = w.department_id
;
-- @block
SELECT d.name "Department name", avg(salary)
FROM work.departments d
JOIN work.workers w ON d.id = w.department_id
GROUP BY d.id
;
