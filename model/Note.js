const mongoose= require('mongoose')

const Note= mongoose.Schema({

    description:{
        type:String,
        trim:true,
        required:[true,'Please add description']
    },
    category:{
        type:String,
        required:true,
        enum:['plans','work','school','life','undefined']
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