const ErrorResponse= require('../utills/errorResponse')
const errorHandler=(err,_,res,next)=>{


    let error={...err}

    error.message=err.message
 
    console.log(err.errors);

  
    //Mongoose bad objectId
    if(err.name==='CastError'){
        const message=`Note not found with id of ${err.value}`

        error= new ErrorResponse(message,404)
    }

    if(err.name==='ValidationError'){
        const message= Object.values(err.errors).map(val=>val.message)

        error= new ErrorResponse(message,404)
         
    }
 
    res.status(error.statusCode || 500).json({
        sucess:false,
        error:error.message || 'Server Error'
    });
}


module.exports=errorHandler