import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import Footer from "./components/Rodape";

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.9,
    categoria: "Prato principal",
    descricao: "Com feijão preto e linguiça",
  },
  {
    id: 2,
    nome: "Moqueca",
    preco: 49.9,
    categoria: "Prato principal",
    descricao: "Com carne de primeira qualidade",
  },
  {
    id: 3,
    nome: "Pudim",
    preco: 15.0,
    categoria: "Sobremesa",
    descricao: "Doce para tornar a vida feliz",
  },
  {
    id: 4,
    nome: "Lasanha",
    preco: 39.9,
    categoria: "Prato principal",
    descricao: "Lasanha ao molho sugo",
  },
  {
    id: 5,
    nome: "Sorvete de Flocos",
    preco: 10.5,
    categoria: "Sobremesa",
    descricao: "Simples mas delicioso",
  },
];

function App() {
  return (
    <main className="app">
      <Header />
      <section className="cardapio">
        <p>Cardápio com {cardapio.length} itens</p>
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            categoria={prato.categoria}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default App;
