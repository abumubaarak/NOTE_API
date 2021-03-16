

exports.getAllNotes=(req,res)=>{
    res.status(200).json({success:true,msg:'All notes'})
}

exports.getSingleNote=(_,res)=>{
    res.status(200).json({success:true,msg:'Single note'})

}

exports.createNote=(_,res)=>{
    res.status(200).json({success:true,msg:'Note created'})

}

exports.updateNote=(req,res)=>{
    res.status(200).json({success:true,msg:`Update Note ${req.params.id}`})
}

exports.deletNote=(_,res)=>{
    res.status(200).json({success:true,msg:'Note Deleted'})

}


