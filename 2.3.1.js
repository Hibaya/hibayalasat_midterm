const pool = require("./db");


pool.query(`  SELECT c.first_name, c.last_name,address.address, city.city 
FROM customer c
JOIN address USING (address_id)
JOIN city USING (city_id)
WHERE city_id IN 
(SELECT city_id 
FROM city
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