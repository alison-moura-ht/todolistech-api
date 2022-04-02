import mongoose from "mongoose"

export async function connect() {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.0xata.mongodb.net/todolistech?retryWrites=true&w=majority")
    console.log("Banco de Dados conectado com sucesso!")
}