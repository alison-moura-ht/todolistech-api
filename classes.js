class Pessoa {
    comer() {
        console.log(this.nome + " vai comer")
    }
}

let jao = new Pessoa()
jao.nome = "Jão da Silva"
jao.comer()

let maria = new Pessoa()
maria.nome = "Maria da Silva"
maria.comer()