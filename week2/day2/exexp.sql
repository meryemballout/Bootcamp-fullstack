SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;

SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

UPDATE customer
SET first_name = 'YourFirstName',
    last_name = 'YourLastName',
    email = 'youremail@example.com'
WHERE customer_id = 1;

SELECT address_id FROM customer WHERE customer_id = 1;

UPDATE address
SET address = '123 Cyber Ave',
    address2 = 'Apt 42',
    district = 'Techville',
    postal_code = '12345',
    phone = '123-456-7890'
WHERE address_id = 5;

--exe2


UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name = 'Lea' AND last_name = 'Benichou'
   OR first_name = 'Marc' AND last_name = 'Benichou';

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

SELECT COUNT(*) FROM students;

SELECT COUNT(*) 
FROM students
WHERE birth_date > '2000-01-01';

ALTER TABLE students
ADD COLUMN math_grade INTEGER;

UPDATE students
SET math_grade = 80
WHERE id = 1;

UPDATE students
SET math_grade = 90
WHERE id IN (2, 4);

UPDATE students
SET math_grade = 40
WHERE id = 6;

SELECT COUNT(*)
FROM students
WHERE math_grade > 83;

SELECT birth_date FROM students WHERE id = 1;

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '2001-05-10', 70);

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '2001-05-10', 70);

SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

SELECT SUM(math_grade) AS total_sum
FROM students;


--exe3

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100)
);

INSERT INTO customers (first_name, last_name) VALUES
('Scott', 'Scott'),
('Melanie', 'Johnson'),
('Greg', 'Jones');

INSERT INTO items (item_name) VALUES
('Small Desk'),
('Large Desk'),
('Fan');

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    item_id INTEGER REFERENCES items(id),
    quantity_purchased INTEGER
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT id FROM items WHERE item_name ILIKE '%fan%'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT id FROM items WHERE item_name ILIKE '%large desk%'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT id FROM items WHERE item_name ILIKE '%small desk%'),
    2
);

SELECT * FROM purchases;

SELECT p.id, c.first_name, c.last_name, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.id;

SELECT p.id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

SELECT * FROM purchases
WHERE customer_id = 5;

SELECT * FROM purchases
WHERE item_id IN (
    SELECT id FROM items
    WHERE item_name ILIKE '%large desk%' OR item_name ILIKE '%small desk%'
);

SELECT c.first_name, c.last_name, i.item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, NULL, 3);

