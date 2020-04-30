var express = require('express');
var router = express.Router(); 

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT order_details, order_date, price, completion_date, tailor_ID, customer_ID  FROM custom_order";
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
        }
        res.render('order/allrecords', {
            allrecs: result
        });
    });
});
module.exports = router;
