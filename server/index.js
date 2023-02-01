const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

// Manejar todas las solicitudes que no sean para recursos estáticos
app.get("/asdasd", (req, res) => res.send("HELLO WORLD"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(4000, () => console.log("Server on Port 4000"));
