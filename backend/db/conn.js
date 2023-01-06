
const mongoose = require('mongoose');

async function main() {

  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect("mongodb+srv://nsge:6AXdc9Vi0h6oDtfl@cluster0.rzhns0s.mongodb.net/?retryWrites=true&w=majority");

    console.log('Db está conectado!');
  }

  catch (error) {

    console.log(`Oops! Deu ruim: ${error}`)

  }

};

module.exports = main;