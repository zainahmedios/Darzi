var express = require('express');
var router = express.Router(); 

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT title, tailor_ID, customer_ID, rate, comments, review_date FROM review";
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
        }
        res.render('review/allrecords', {
            allrecs: result
        });
    });
});
module.exports = router;
