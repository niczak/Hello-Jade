
/*
 * GET users page.
 */

exports.users = function(req, res){
  res.render('users', { users : users, title : "Elite Developers" })
};