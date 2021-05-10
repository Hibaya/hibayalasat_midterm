const pool = require("./db");


pool.query(`SELECT c.film_id, c.title ,actor.first_name,actor.last_name, actor.actor_id
FROM film c
JOIN film_actor USING (film_id)
JOIN actor USING (actor_id)
WHERE first_name IN 
(SELECT first_name 
FROM actor
)


`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();