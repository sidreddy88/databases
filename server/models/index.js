var db = require('../db');





module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = "select username, text from messages";
      db.query(queryStr, function (err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = "insert into messages(username, text) values (" +"'"+params[0]+"'"+  ", " +"'"+params[1]+"'"+")";
      console.log(queryStr);
      db.query(queryStr, function (err, results) {
        callback(results);
      });
   } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};



// var queryStr = "insert into messages(text, userid, roomname) \
//                       value (?, (select id from users where username = ? limit 1), ?)";

// var queryStr = "insert into messages(text, userid, roomname) value (" + username + ", " + text +")";