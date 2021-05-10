const pool = require("./db");


pool.query(`  SELECT  COUNT(film_id)"TOTAL NUMBER OF film" From public.film ;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();