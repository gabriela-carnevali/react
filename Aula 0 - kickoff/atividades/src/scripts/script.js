class Bebida {
    constructor (nome, preco, volume) {
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }

    descricao() {
        return `[${this.nome} - ${this.volume}ml - R$ ${preco.toFixed(2).replace('.', ',')}]`
    }
}

const bebida = [
    new Bebida ("Coca-Cola", 350, 4),
    new Bebida ("Sprite", 600, 10)
]