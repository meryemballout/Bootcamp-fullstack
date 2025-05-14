-- Exercise 2 : DVD Rental

--Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film 
SET language_id = 2 
WHERE film_id IN (1, 2, 3)
AND EXISTS (SELECT 1 FROM language WHERE language_id = 2);

--Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT
    conname AS constraint_name,
    conrelid::regclass AS table_name,
    a.attname AS column_name,
    cl.relname AS referenced_table,
    a2.attname AS referenced_column
FROM
    pg_constraint AS c
JOIN
    pg_attribute AS a ON a.attnum = ANY(c.conkey)
JOIN
    pg_class AS cl ON cl.oid = c.confrelid
JOIN
    pg_attribute AS a2 ON a2.attnum = ANY(c.confkey)
WHERE
    conrelid = 'customer'::regclass;

---We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
--first creat ustomer_review
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customer(customer_id),
    film_id INT REFERENCES new_film(id),
    review_text TEXT
);

DROP TABLE customer_review;

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*) 
FROM rental 
WHERE return_date IS NULL;
 
--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

SELECT DISTINCT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' 
AND a.last_name = 'Monroe'
AND f.description ILIKE '%sumo wrestler%';

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
AND f.rating = 'R'
AND f.length < 60;
 
--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT DISTINCT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew' 
AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
 
--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace
SELECT DISTINCT f.title, f.replacement_cost
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' 
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;