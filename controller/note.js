const asyncHandler = require("../middleware/async");
 const Note = require("../model/Note");
const ErrorResponse = require("../utills/errorResponse");
 const errorResponse= require('../utills/errorResponse')


 // @desc   GET all  note
// @route  GET /api/v1/note/
// @access Public
exports.getAllNotes =asyncHandler( async (req, res) => {
 
    const note = await Note.find();

    res
      .status(200)
      .json({ success: true, totalCount: note.length, data: note });
  
})

 // @desc   GET a single   note
// @route  GET /api/v1/note/:id
// @access Public
exports.getSingleNote = asyncHandler(async (req, res, next) => {
   
    const note = await Note.findById(req.params.id);

    res.status(200).json({ success: true, data: note });
  
})

// @desc   Create new  note
// @route  POST /api/v1/note/
// @access Public
exports.createNote =asyncHandler(async (req, res, next) => {
 
    const note = await Note.create(req.body);
    res.status(201).json({
      success: true,
      data: note,
    });
   
});

 // @desc   UPDATE note
// @route  PUT /api/v1/note/:id
// @access Public
exports.updateNote =asyncHandler( async (req, res, next) => {
 
    let noteRequest = req.body;

    noteRequest.dateUpdated = Date.now();

    const note = await Note.findByIdAndUpdate(req.params.id, noteRequest, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: note });
 
})


 // @desc   delete note with id
// @route  DELETE /api/v1/note/
// @access Public
exports.deletNote =asyncHandler(async (req, res) => {
    const note =await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
 
})
