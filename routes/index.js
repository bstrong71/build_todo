const express   = require("express");
const router    = express.Router();
const todos     = [{task: "Wash the car", complete: false, id: 1}, {task: "Wax on, wax off", complete: false, id: 2}, {task: "Mow the grass", complete: false, id: 3}, {task: "Paint the fence", complete: false, id: 4}, {task: "Sand the floor", complete: false, id: 5}];



router.get("/", function(req, res) {
  res.render("main", { todos: todos});
});

router.get("/complete/:task", function(req, res) {
  todos[req.params.task - 1].complete = true;
  res.redirect("/");
})


router.post("/", function(req, res) {
  let obj = {task: req.body.task, complete: false, id: todos.length + 1};
  todos.push(obj);
  res.redirect("/");
})



module.exports = router;
