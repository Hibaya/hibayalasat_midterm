const pool = require("./db");


pool.query(`  SELECT c.name "category name",COUNT(film.film_id) "film count"
FROM public.film  f, film_category film, category c
WHERE film.film_id = film.film_id
AND film.category_id = c.category_id 
GROUP BY c.name ORDER BY c.name ASC
;

`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();