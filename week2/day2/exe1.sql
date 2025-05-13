SELECT * FROM customer;
SELECT first_name || ' ' || last_name AS full_name
FROM customer;
SELECT DISTINCT create_date
FROM customer;
SELECT *
FROM customer
ORDER BY first_name DESC;
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;
SELECT address, phone
FROM address
WHERE district = 'Texas';
SELECT *
FROM film
WHERE film_id IN (15, 150);
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'HARRY POTTER ';
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'AC%';
SELECT film_id, title, description, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;
WITH RankedFilms AS (
    SELECT film_id, title, description, rental_rate,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rank
    FROM film
)
SELECT film_id, title, description, rental_rate
FROM RankedFilms
WHERE rank BETWEEN 11 AND 20;
SELECT 
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;

SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

SELECT 
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date,
    payment.staff_id
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id ASC;