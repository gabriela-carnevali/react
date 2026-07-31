class Prato {
    constructor (nome, preco, categoria) {
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }

    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco * (1 - percentual/100)
    }
}
// Fim da classe

const cardapio = [
    new Prato ("Feijoada", 42.9, "Prato Principal"),
    new Prato ("Moqueca de Peixe", 58.0, "Prato Principal"),
    new Prato ("Coxinha Artesanal", 8.50, "Petisco"),
    new Prato ("Brigadeiro Gourmet", 6, "Sobremesa"),
    new Prato ("Morango do amor (Pistache)", 15, "Sobremesa"),
    new Prato ("Suco de maracujá", 12, "Bebida")
]

console.log("=== Pratos Criados ===")
cardapio.forEach(p => {
    console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

const containerCardapio = document.querySelector('#cardapio')

function criarCardPrato(prato) {
    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = 
    `
    <h3>${prato.nome}</h3>
    <span class="categoria"> ${prato.categoria} </span>
    <div class="preco"> ${prato.formatarPreco()} </div>
    `

    card.addEventListener('click', () => {
        alert(
            `
            🍽️ ${prato.nome} \n
            Cateogoria: ${prato.categoria} 
            Preço: ${prato.formatarPreco()}

            `
        )
    })

    return card
}
// Fim da função criar card prato 

function renderizarCardapio() {
    containerCardapio.innerHTML = ''

    cardapio.forEach(prato => {
        const card = criarCardPrato(prato)

        containerCardapio.appendChild(card)
    })
    
}
// Fim da função renderizar cardapio

renderizarCardapio()

cardapio[0].aplicarDesconto(20)
renderizarCardapio()