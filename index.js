var Yixin = require('./');
var yixin = new Yixin('thisisonesimpletoken');
app.configure(function() {
  app.use(express.query());
  app.use('/yinxin', yixin.middleware);
  yixin
    .text(function(req, res) {
      var message = req.yixin; //用户的消息通过`req.yixin`获取 
      res.reply('hello world');
    })
    .image(function(req, res) {
      //... 
    });
  //... 
});
 