 const db = require('./config/conexion')
 const express=require('express')
 const cors=require('cors')
 const app=express()
 app.use(cors())
 app.use(express.json())
 const PORT=process.env.port || 3000


 app.get('/api/producto/all',async(req,res)=>{

        const sql="select * from producto"
        db.query(sql,(err,data)=>{
            if(err) return err
            res.json({
                "productos":data,
                "status":"OK"
            })
        })

})


 app.post("/api/persona",(req,res)=>{

 })


 app.put("/api/persona",(req,res)=>{

})

app.delete("/api/persona/:id",(req,res)=>{

})
 

 
 app.listen(PORT,()=>{
     console.log("Servidor Ejecutando Puerto "+PORT)
 })