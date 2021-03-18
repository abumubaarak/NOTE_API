const mongoose= require('mongoose')

const Note= mongoose.Schema({

    description:{
        type:String,
        trim:true,
        required:[true,'Please add description']
    },
    category:{
        type:String,
        required:[true,'Plsease add a note category'],
        enum:['plans','work','school','life']
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    slug:String,
    dateUpdated:{
        type:Date,
        default:Date.now

    }

})


module.exports=mongoose.model('Note',Note)