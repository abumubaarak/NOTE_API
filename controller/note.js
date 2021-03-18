const asyncHandler = require("../middleware/async");
const { findById } = require("../model/Note");
const Note = require("../model/Note");

exports.getAllNotes = async (req, res) => {
  try {
    const note = await Note.find();

    res
      .status(200)
      .json({ success: true, totalCount: note.length, data: note });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getSingleNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    res.status(200).json({ success: true, data: note });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

// @desc   Create new  note
// @route  POST /api/v1/note/
// @access Public
exports.createNote = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({
      success: true,
      data: note,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    let noteRequest = req.body;

    noteRequest.dateUpdated = Date.now();

    const note = await Note.findByIdAndUpdate(req.params.id, noteRequest, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: note });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err });
  }
};

exports.deletNote =async (req, res) => {
  try {
    
    const note =await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
