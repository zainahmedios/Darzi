var express = require('express');
var router = express.Router(); 

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT first_name, last_name, specialization, avg_rating, email, address_one, address_two, city, state, zipcode, username, password  FROM tailor";
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
        }
        res.render('tailor/allrecords', {
            allrecs: result
        });
    });
});
module.exports = router;
