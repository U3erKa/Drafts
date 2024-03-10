-- @conn Rozetka ripoff
/*
создать вьюшку, в которой будет
имя и фамилия юзера
его возраст 
его пол словами, не булем
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
