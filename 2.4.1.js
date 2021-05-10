const pool = require("./db");

const sql = `call replace (1, 'jeffrey')`
;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();




