-- @conn Rozetka ripoff
-- @block
SELECT w.name "Worker name", salary, d.name "Department name", "Average salary for department"
FROM work.departments d
JOIN work.workers w ON d.id = w.department_id
JOIN (
  SELECT d.name "Department name", avg(salary) "Average salary for department"
  FROM work.departments d
  JOIN work.workers w ON d.id = w.department_id
  GROUP BY d.id
) dep_with_avg_salary ON dep_with_avg_salary."Department name" = d.name
;
-- @block
SELECT w.name "Worker name", salary, d.name "Department name",
avg(salary) OVER (PARTITION BY d.id)
"Average salary for department",
avg(salary) OVER() "Average salary for company"
FROM work.departments d
JOIN work.workers w ON d.id = w.department_id
;
-- @block
SELECT w.name "Worker name", salary, d.name "Department name",
-- breaks wirhout ROWS BETWEEN ...
-- sum(salary) OVER (PARTITION BY d.id ORDER BY w.id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
sum(salary) OVER (PARTITION BY d.id)
"Total salary for department",
sum(salary) OVER() "Total salary for company"
FROM work.departments d
JOIN work.workers w ON d.id = w.department_id
;
