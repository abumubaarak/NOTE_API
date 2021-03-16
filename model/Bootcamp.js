const mongoose= require('mongoose')

const Bootcamps= mongoose.Schema({

    description:{
        type:String,
        trim:true,
        required:[true,'Please add description']
    },
    category:{
        type:String,
        required:true,
        enum:['Plans','Work','School','life','undefined']
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    slug:String,
    dateCategory:{
        type:Date,
        default:Date.now
    }

})


module.exports=mongoose.model('Bootcamps',Bootcamps)