const pool = require("./db");


pool.query(`  SELECT fi.film_id "film id",
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
group by fi.film_id, c.name

`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();