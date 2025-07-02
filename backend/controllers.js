import connPool from "./dbConfig.js"
import joi from "joi"
export const indexController=(req,res)=>{
res.json({name:"emmy"})
}

 export const createNote= (req,res)=>{
    const schema=joi.object({
        title:joi.string().max(20).required(),
        description:joi.string().required(),
    });
    const {error,value}=schema.validate(req.body)
    const {title,description}=value
    if (error) {
        return res.json({resp:error.details[0].message})
    }
      connPool.query("INSERT into notes(`title`,`description`) values(?,?) ",[title,description],(err,result)=>{
        if (err) {
            console.log(err)
        }
        return res.json({resp:"note saved"})
    })
}


export const getAllNotes= (req,res)=>{
     connPool.query("SELECT * from notes",(err,result)=>{
        if (result.length>0) {
            return res.json(result)

        }
        else{
            res.json({error:"ooops, no notes found"})
        }
        
       
    })
}

export const getNoteById= (req,res)=>{
    const id=req.params.id
    connPool.query("SELECT * from notes where id=?",[id],(err,result)=>{
       if (result.length>0) {
           return res.json(result)
       }
       res.send("no notes found")
      
   })
}

export const deleteNote= (req,res)=>{
    const id=req.params.id
    connPool.query("DELETE from notes where id=?",[id],(err,result)=>{
       if (result.affectedRows>0) {
           return res.json({message:"note with id["+id+"] deleted"})
       }
       res.send("this note not found")
      
   })
}

export const updateNote= (req,res)=>{
    const {id,title,description}=req.body
    connPool.query("UPDATE notes set title=?, description=? where id=?",[title,description,id],(err,result)=>{
       if (result.affectedRows>0) {
           return res.json({resp:"note with id["+id+"] updated"})
       }
       res.send("this note not found")
      
   })
}


