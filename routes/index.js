const express   = require("express");
const router    = express.Router();
const todos     = [{task: "Wash the car", complete: false, id: 1}, {task: "Buy groceries", complete: true, id: 2}, {task: "Mow the grass", complete: false, id: 3}];
// const done      = [];


router.get("/", function(req, res) {
  res.render("main", { todos: todos});
});

router.get("/complete/:task", function(req, res) {
  todos[req.params.task - 1].complete = true;
  res.redirect("/");
})
// router.post("/d")

router.post("/", function(req, res) {
  let obj = {task: req.body.task, complete: false, id: todos.length + 1};
  todos.push(obj);
  res.redirect("/");
})



module.exports = router;
