const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Notes = mongoose.model("Note",notesSchema)
module.exports=Notes