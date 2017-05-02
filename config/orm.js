var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(whatToSelect, table, orderCol, orderBy, cb) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
      console.log(result);
    });
  } ,
  insertOne: function(whatToSelect, table, orderCol, orderBy, cb) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
      console.log(result);
    });
  } ,
  updateOne: function(whatToSelect, table, orderCol, orderBy, cb) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
