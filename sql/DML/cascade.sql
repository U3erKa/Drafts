-- @conn Rozetka ripoff
-- @block
DELETE FROM work.workers
WHERE department_id IN (
  SELECT id FROM work.departments
  WHERE name = 'HR'
)
RETURNING *
;
-- @block
DELETE FROM work.departments
WHERE name = 'HR'
;
-- @block
ALTER TABLE work.workers
DROP CONSTRAINT workers_department_id_fkey
;
-- @block
ALTER TABLE work.workers
ADD FOREIGN KEY (department_id) REFERENCES work.departments
ON DELETE CASCADE
ON UPDATE CASCADE
;
-- @block
CREATE TABLE work.workers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  salary DECIMAL(9,2) NOT NULL CHECK(salary > 0),
  department_id INT NOT NULL REFERENCES work.departments ON DELETE CASCADE ON UPDATE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)
;
-- @block Clone table
CREATE TABLE NEW_TableName
SELECT *
FROM OLD_TableName
;
-- @block Clone table
CREATE TABLE NEW_TableName
LIKE OLD_TableName
;
