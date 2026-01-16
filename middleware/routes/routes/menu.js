const router = require("express").Router();
const Menu = require("../models/Menu");
const auth = require("../middleware/authMiddleware");

router.get("/", async (req, res) => {
  res.json(await Menu.find());
});

router.post("/", auth, async (req, res) => {
  const item = new Menu(req.body);
  await item.save();
  res.json(item);
});

router.delete("/:id", auth, async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
