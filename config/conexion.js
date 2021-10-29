const mysql=require('mysql')
const conexion=mysql.createConnection({
    host:'localhost',
    user:'adminusb',
    password:'123456',
    database:'bdusb'
})

conexion.connect((err)=>{
    if(err){
        console.log("Error de Conexion")
    }
    else{
        console.log("Conecto con Exito a la BD")
    }
})

module.exports=conexion