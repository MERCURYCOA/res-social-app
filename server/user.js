const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");

Router.get("/list", function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  });
});

// Router.post("/register", function(req, res) {
//   console.log(req.body);
//   User.findOne({ user: user }, function(err, doc) {
//     if (doc) {
//       return res.json({ code: 1, msg: "username exists" });
//     }
//     // const { user, pwd, type } = req.body;
//     const newUser = new User({
//       user: req.body.user,
//       pwd: req.body.pwd,
//       type: req.body.type
//     });

//     newUser
//       .save()
//       .then(result => {
//         console.log("save");
//         return res.json({ code: 0 });
//       })
//       .catch(err => {
//         return res.json({ code: 1, msg: "backend goes wrong" });
//       });
//   });
// });

Router.post("/register", function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "用户名重复" });
    }

    const userModel = new User({ user, type, pwd: md5Pwd(pwd) });
    userModel.save(function(e, d) {
      if (e) {
        return res.json({ code: 1, msg: "后端出错了" });
      }
      const { user, type, _id } = d;
      res.cookie("userid", _id);
      return res.json({ code: 0, data: { user, type, _id } });
    });
  });
});

Router.get("/info", function(req, res) {
  return res.json({ code: 1 });
});

module.exports = Router;
