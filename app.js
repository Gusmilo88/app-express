const express = require("express");
const app = express();
const port = 3030

console.log("Trabajando en express");

app.listen(port, () => console.log(`Servidor levantado en el puerto${port}`));