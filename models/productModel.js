const productos = [
    { id: 1, nombre: "Laptop Gamer", precio: 1500 },
    { id: 2, nombre: "Smartphone Pro", precio: 800 },
    { id: 3, nombre: "Auriculares Bluetooth", precio: 200 }
  ];

  function obtainProduct(id){
    return productos.find(item => item.id == id)
  }

  module.exports = {
    obtainProduct
  }