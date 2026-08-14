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
    const card = document.createElement('article')

    // Live Code - substitua a string vazia pelas classes Bootstrap
    card.className = 'card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm'

    card.innerHTML = 
    `
    <h3 class="fw-bold text-dark mb-2">${prato.nome}</h3>
    <span class="categoria fs-6 d-block mb-3"> ${prato.categoria} </span>
    <div class="preco fs-5 fw-bold text-success"> ${prato.formatarPreco()} </div>
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

    // Teste pra quebrar o código
    const mudanca = containerCardapio.firstElementChild
    mudanca.style.fontSize = '50px'
    mudanca.style.width = '700px'
    
}
// Fim da função renderizar cardapio

renderizarCardapio()

cardapio[0].aplicarDesconto(20)
renderizarCardapio()