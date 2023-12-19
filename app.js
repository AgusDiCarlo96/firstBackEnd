const express = require("express");
const { obtainProduct } = require("./models/productModel");
const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/productos/:id", (request, response) => {
  const productId = request.params.id;
  const product = obtainProduct(productId);
  if(!product) {
    return response.send("No encontrado");
  }
  response.render("producto", { producto: product });
});


app.listen(PORT, () => {
  console.log(`Server levantado en http://localhost:${PORT}`);
});
