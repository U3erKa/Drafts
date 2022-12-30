-- @block Rigid one-to-one
CREATE TABLE humans (
  id serial PRIMARY KEY,
  name varchar(64),
  birth_sertificate_id int NOT NULL UNIQUE
);
-- @block
CREATE TABLE birth_sertificates
(
  id serial PRIMARY KEY,
  date_of_birth date NOT NULL,
  human_id int NOT NULL UNIQUE REFERENCES humans DEFERRABLE INITIALLY DEFERRED
);
-- @block
ALTER TABLE humans
ADD FOREIGN KEY (birth_sertificate_id) REFERENCES birth_sertificates DEFERRABLE INITIALLY DEFERRED;
--  @block
DROP TABLE humans CASCADE;
DROP TABLE birth_sertificates CASCADE;
-- @block
BEGIN;

INSERT INTO humans
(name, birth_sertificate_id)
VALUES
('Anton', 1);

INSERT INTO birth_sertificates
(date_of_birth, human_id)
VALUES
('20-2-2000', 1);

COMMIT;