import tarefaModel from "./../model/tarefa.js"

export default class UsuarioService { 
    async buscarTodos() {
        try {
            const resultado = await tarefaModel.find({})
            return resultado
        } catch (error) {
            throw { 
                message: "Erro ao buscar todos os tarefas: " + error
            }
        }
    }

    async buscarUm(filtro, prop = "") {
        try {
            const resultado = await tarefaModel.findOne(filtro, prop)
            return resultado
        } catch (error) {
            throw { 
                message: "Erro ao buscar uma tarefa por filtro: " + error
            }
        }
    }
    
    async inserir(tarefa) {
        try {
            const resultado = await tarefaModel.create(tarefa)
            return resultado
        } catch (error) {
            throw {
                message: "Erro ao inserir tarefa: " + error
            }
        }
    }

    async atualizar(tarefa) {
        try {
            const resultado = await tarefaModel.updateOne({ _id: tarefa._id }, tarefa)
            return resultado
        } catch (error) {
            throw {
                message: "Erro ao atualizar tarefa: " + error
            }
        }
    }

    async remover(id) {
        try {
            const resultado = await tarefaModel.deleteOne({ _id: id })
            return resultado
        } catch (error) {
            throw {
                message: "Erro ao remover tarefa: " + error
            }
        }
    }
 }