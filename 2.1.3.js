const pool = require("./db");


pool.query(` SELECT "film_id", "title"   From public.film  WHERE replacement_cost= (SELECT MAX (replacement_cost)FROM film);;
`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();