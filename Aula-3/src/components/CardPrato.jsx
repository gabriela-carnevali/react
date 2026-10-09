import { useState } from "react";

function CardPrato({ nome, preco, categoria, descricao, onAdicionar }) {
  const qtdLimite = 10;

  //Estado LOCAL: cada card tem a sua própria quantidade, independente dos outros.

  // 1 é o valor inicial do seu estado, então a quantidade já começa em 1
  const [quantidade, setQuantidade] = useState(1);
  const [curtidas, setCurtidas] = useState(0);
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function diminuir() {
    //Regra de negócio: não existe pedido com quantidade menor que 1
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    if (quantidade < qtdLimite) {
      setQuantidade(quantidade + 1);
    }
  }

  function adicionar() {
    // Avisa o pai (App) quantos itens entraram e volta a quantidade para 1.
    onAdicionar(quantidade, preco);
    setQuantidade(1);
  }

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      <h2>
        {categoria === "Prato principal" && "🍽️"}
        {categoria === "Bebida" && "🥤"}
        {categoria === "Sobremesa" && "🍰"}
        {nome}
      </h2>
      <p className="preco">{precoFormatado}</p>
      {mostrarDescricao && <p className="descricao">{descricao}</p>}
      <div className="quantidade">
        <button
          type="button"
          onClick={diminuir}
          aria-label={`Diminuir quantidade de ${nome}`}
        >
          -
        </button>
        <span>{quantidade}</span>
        <button
          type="button"
          onClick={aumentar}
          aria-label={`Aumentar quantidade de ${nome}`}
        >
          +
        </button>
      </div>
      <div className="acoes-secundarias">
        <button
          type="button"
          className="btn-descricao"
          onClick={() => setMostrarDescricao(!mostrarDescricao)}
        >
          {mostrarDescricao ? "Esconder descrição" : "Ver descrição"}
        </button>
        <button
          type="button"
          className="btn-curtir"
          onClick={() => setCurtidas(curtidas + 1)}
        >
          ❤️ Curtir ({curtidas})
        </button>
      </div>
      <button type="button" className="btn-adicionar" onClick={adicionar}>
        Adicionar ao pedido
      </button>
    </article>
  );
}

export default CardPrato;
