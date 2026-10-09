import { useState } from "react";
import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import { cardapio } from "./data/cardapio";
import Footer from "./components/Rodape";
import "./App.css" 


function App() {
  // O total fica no App porque DOIS componentes precisam dele:
  // o Header mostra e o CardPrato altera. O estado mora no "pai comum".

  // useState começa a contagem de salvamento em zero
  const [totalItens, setTotalItens] = useState(0)

  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade)
  }

  return (
    <main className="app">
      <Header totalItens={totalItens}/>
      <p>Cardápio com {cardapio.length} itens</p>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            categoria={prato.categoria}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default App;
