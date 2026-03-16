const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    }
})

const Notes = mongoose.model("Note",notesSchema)
module.exports=Notes