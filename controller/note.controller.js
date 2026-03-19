const mongoose = require("mongoose")
const Notes = require("../model/notemodel")


const create = async (req,res) => {
    const { title, description } = req.body

    const newNote = await Notes.create({
        title,
        description,
        user:req.user.id
    })
    res.status(200).json({
        "message": "New note created",
        "note": newNote
    })

}

const deleteNote = async(req,res)=>{
    const {title} = req.body
    const response = await Notes.findOneAndDelete({title})
    res.status(200).json({
        "message":"note deleted"
    })
}
const updateNote = async(req,res)=>{
    const {title,description} =  req.body

    const note = await Notes.findOne({title})
    const responce = await Notes.findOneAndUpdate(
        {title},
        {description: note.description + " " + description},
        {new:true}
    )
    res.status(200).json({
        "message":"Note Updated",
        "note":responce
    })

}
const getNotes = async (req,res)=>{
    const userId = req.user.id
    try {
        const notes = await Notes.find({user:userId})
        res.status(200).json({
            notes
        })
    } catch (error) {
        res.status(500).json({"message":"internal server error"})
    }
    
    
}
module.exports = {create,deleteNote,updateNote,getNotes}