CREATE TABLE actors (
    id INT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL
);

INSERT INTO actors (id, firstname, lastname)
VALUES (1, 'Harry', 'Potter');

SELECT * FROM actors;
SELECT COUNT(*) FROM actors;
INSERT INTO actors (id, firstname, lastname)
VALUES (NULL, NULL, '');
   --ghadi i3tina error 