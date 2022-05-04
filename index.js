const express = require("express");
const app = express();
const PORT = 8001;

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];

app.get("/", (req, res)=>{
    let max = 10;
    let respuesta = [];
    for (let i = 0; i < max; i++) {
        respuesta.push({
            nombre: nombres[Math.floor(Math.random() * nombres.length)],
            apellido: apellidos[Math.floor(Math.random() * apellidos.length)],
            color: colores[Math.floor(Math.random() * colores.length)]
        });
    }
    res.json(respuesta);
})

app.listen(PORT, ()=>{console.log(`Server on http://localhost:${PORT}`)});