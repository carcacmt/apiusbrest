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

app.get('/api/producto/:id',async(req,res)=>{

    const sql="select * from producto where id=?"
    const id=req.params.id
    db.query(sql,id,(err,data)=>{
        if(err) return err
        res.json({
            "productos":data,
            "status":"OK"
        })
    })

})


 app.post("/api/producto/save",(req,res)=>{
     values=Object.values(req.body)
     const sql = "insert into producto(nombre,color,precio) values(?,?,?)"
     
     db.query(sql,values,(err,data)=>{
          if(err) return err
          res.json({
              "mensaje":"Producto Grabado",
              "peticion":"OK"
          })          
      })
      res.status(201)

 })


 app.put("/api/producto/save",(req,res)=>{

    values=Object.values(req.body)
    const sql = "update producto set nombre=?,color=?,precio=? where id=?"
    val=[values[1],values[2],values[3],values[0]]
    db.query(sql,val,(err,data)=>{
        if(err) return err
        res.json({
            "mensaje":"Producto Actualizado",
            "peticion":"OK"
        })          
    })
    res.status(201)

})

app.delete("/api/producto/:id",(req,res)=>{

    const id=req.params.id
    const sql ="delete from producto where id=?"
    db.query(sql,id,(err,data)=>{
        if(err) return err   
        res.json({
            "peticion":"OK"
        })
    })
    res.status(204)
})
 

 
 app.listen(PORT,()=>{
     console.log("Servidor Ejecutando Puerto "+PORT)
 })