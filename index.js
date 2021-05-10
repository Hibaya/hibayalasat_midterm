const express = require("express");
const pool = require("./db");
const app = express();
const cors = require("cors");



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get("/HIBAYALASAT_MIDTERM_2.1.1", async (req, res) => {
    try {
        const sql = ` SELECT  COUNT(film_id)"TOTAL NUMBER OF film" From public.film ;`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});




app.get("/HIBAYALASAT_MIDTERM_2.1.2", async (req, res) => {
    try {
        const sql = `  SELECT
        rating "rating", SUM (rental_duration)  FROM public.film
        GROUP BY rating ORDER BY rating ASC`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});


app.get("/HIBAYALASAT_MIDTERM_2.1.3", async (req, res) => {
    try {
        const sql = ` (SELECT "film_id", "title"   From public.film  WHERE replacement_cost= (SELECT MAX (replacement_cost)FROM film)`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});


app.get("/HIBAYALASAT_MIDTERM_2.2.1", async (req, res) => {
    try {
        const sql = `SELECT fi.film_id "film id",
        fi.title "title",
        c.name "category",
        fi.rental_rate "price",
        fi.rating "rating",
        GROUP_CONCAT(CONCAT(a.first_name,'', a.last_name)) "actors"
        
        from film fi
        join film_category fc on fc.film_id=fi.film_id
        join film_actor fa on fa.film_id= fi.film_id
        join category c on c.category_id = fc.category_id
        join actor a on a.actor_id = fa.actor_id
        group by fi.film_id, c.name`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});


app.get("/HIBAYALASAT_MIDTERM_2.2.2", async (req, res) => {
    try {
        const sql = ` SELECT c.name "category name",COUNT(film.film_id) "film count"
        FROM public.film  f, film_category film, category c
        WHERE film.film_id = film.film_id
        AND film.category_id = c.category_id 
        GROUP BY c.name ORDER BY c.name ASC
        ;`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});


app.get("/HIBAYALASAT_MIDTERM_2.3.1", async (req, res) => {
    try {
        const sql = ` SELECT c.first_name, c.last_name,address.address, city.city 
        FROM customer c
        JOIN address USING (address_id)
        JOIN city USING (city_id)
        WHERE city_id IN 
        (SELECT city_id 
        FROM city
        )
        `;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});


app.get("/HIBAYALASAT_MIDTERM_2.3.2", async (req, res) => {
    try {
        const sql = ` SELECT c.film_id, c.title ,actor.first_name,actor.last_name, actor.actor_id
        FROM film c
        JOIN film_actor USING (film_id)
        JOIN actor USING (actor_id)
        WHERE first_name IN 
        (SELECT first_name 
        FROM actor
        )`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }

});


app.get("/HIBAYALASAT_MIDTERM_2.4.1", async (req, res) => {
    try {
        const sql = ` call replace (1, 'jeffrey')`;
        const res1 = await pool.query(sql);
        res.send(res1.rows)

    } catch (error) { console.error(error.message) }``

});






app.listen(5000, () => {

    console.log("Server started as localhost : 5000")

})