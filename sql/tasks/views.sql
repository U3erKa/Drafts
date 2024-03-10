-- @conn Rozetka ripoff
/*
створити VIEW, в якому буде ім'я та прізвище юзера, його вік, його стать словами, не BOOLEAN
*/
-- @block
CREATE OR REPLACE VIEW user_data AS (
  SELECT first_name, last_name, extract(YEAR from age(birthday)) age,
  CASE
    WHEN is_male THEN 'male'
    WHEN NOT is_male THEN 'female'
  END gender
  FROM users
)
;
