/*
  3NF - 2NF + відсутні транзитивні залежності неключів

  транзитивна залежність - залежність не тільки від ключа але й від іншого атрибута

  id < attr1 - норма
  id < attr1 < attr2 - транзитивна залежність, погано
*/
CREATE TABLE employees (
  id serial PRIMARY KEY,
  name text,
  email text UNIQUE,
  department text,
  department_boss int -- неключ залежить від іншого неключового атрибута
);

/* 3NF */
CREATE TABLE employees (
  id serial PRIMARY KEY,
  name text,
  email text UNIQUE,
  department_id int,
);
--
CREATE TABLE departments (
  id serial PRIMARY KEY,
  name text,
  department_boss int 
);