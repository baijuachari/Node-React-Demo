CREATE DATABASE meaniedemo
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = meaniets
       LC_COLLATE = 'English_United States.1252'
       LC_CTYPE = 'English_United States.1252'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE meaniedemo
  IS 'default administrative connection database';
