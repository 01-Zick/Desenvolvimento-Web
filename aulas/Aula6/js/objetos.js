class Produto {
    _nome
    _idade

    constructor(nome, idade) {
        this._nome = String(nome)
        this._idade = Number(idade)
    }
}

var pessoa = new Pessoa("Fulano", 10)

console.log(pessoa)
