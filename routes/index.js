
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "@niczak's Node/Express/Jade Example" })
};