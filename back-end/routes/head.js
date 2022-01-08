var express = require('express');
var router = express.Router();
var Class = require('../models/class');
var Teacher = require('../models/teacher');
var Student = require('../models/student');

var arr1 = [];
var arr2 = [];
var arr3 = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// FA18-BCS-071 & FA18-BCS-073 ASSIGNEND HEAD ROUTE:
// View Dashboard (ALL Students, Tachers, Classes)

router.get('/View-Dashboard', function(req, res, next){
  Teacher.find().populate().exec(async function(err, result1){
    if (err) {
      next(err);
    }
    arr1 = await result1;
    console.log(arr1);
    Student.find().populate().exec(async function(err, result2){
      if (err) {
        next(err);
      }
      arr2 = await result2;
      console.log(arr2);
      Class.find().populate().exec(async function(err, result3){
        if (err) {
          next(err);
        }
        arr3 = await result3;
        console.log(arr3);
        res.json({arr1,arr2,arr3});
      })
    })
  })
});

// ENDING ...

module.exports = router;
