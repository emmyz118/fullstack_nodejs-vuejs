import express from 'express'
import rout from './routes.js'
import cors from "cors"
const app=express()
const port=4400
app.listen(port)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(rout)

