const express = require("express");
let faker = require("faker");
faker.locale = 'uk';
const app = express();
const PORT = 8001;
let serverRoutes = require("./routes");
const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];


app.use(express.json());
app.use(express.urlencoded({extended:true}))

serverRoutes(app);

app.get("/", (req, res)=>{
    let {cant} = req.query;
    if(!cant) cant = 30
    let respuesta = [];
    for (let i = 0; i < cant; i++) {
        respuesta.push({
            // nombre: nombres[Math.floor(Math.random() * nombres.length)],
            // apellido: apellidos[Math.floor(Math.random() * apellidos.length)],
            // color: colores[Math.floor(Math.random() * colores.length)]
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            color: faker.internet.color()
        });
    }
    res.json(respuesta);
})

app.listen(PORT, ()=>{console.log(`Server on http://localhost:${PORT}`)});