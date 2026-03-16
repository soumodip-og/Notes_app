const mongoose = require("mongoose")
const Notes = require("../model/notemodel")

const create = async (req,res) => {
    const { title, description } = req.body

    const newNote = await Notes.create({
        title,
        description
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

    const responce = await Notes.findOneAndUpdate(
        {title},
        {description},
        {new:true}
    )
    res.status(200).json({
        "message":"Note Updated",
        "note":responce
    })

}
module.exports = {create,deleteNote,updateNote}