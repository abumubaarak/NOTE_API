const express = require("express");
const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deletNote,
} = require("../controller/note");

const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getSingleNote).put(updateNote).delete(deletNote);

module.exports = router;
