const pool = require("./db");


pool.query(` SELECT
rating "rating", SUM (rental_duration)  FROM public.film
GROUP BY rating ORDER BY rating ASC;
`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();