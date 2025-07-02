import { Router } from 'express'
import { createNote, deleteNote, getAllNotes, getNoteById, indexController, updateNote } from './controllers.js'
const rout=Router()

rout.get("/",indexController)
rout.post("/create",createNote)
rout.get("/notes",getAllNotes)
rout.get("/notes/id/:id",getNoteById)
rout.delete("/delete/:id",deleteNote)
rout.put("/update",updateNote)

export default rout