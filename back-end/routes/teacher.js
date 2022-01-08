var express = require('express');
var router = express.Router();
var Teacher = require('../models/teacher');
var Class = require('../models/class');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// FA18-BCS-071 & FA18-BCS-073 ASSIGNEND TEACHER ROUTE:
// ADDING MATERIAL

router.post('/addMat:classid',function(req, res, next){
    Class.findOneAndUpdate({'_id': req.params.id}, req.body).then((addedMaterial)=>{
    res.send("Material Added Successfully. ");
}), (err) => next(err);
});

// ENDING ...

module.exports = router;
