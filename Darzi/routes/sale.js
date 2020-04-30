var express = require('express');
var router = express.Router(); 

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT order_ID, sale_Date, sale_status, tailor_ID, customer_ID  FROM sale";
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
        }
        res.render('sale/allrecords', {
            allrecs: result
        });
    });
});
module.exports = router;
