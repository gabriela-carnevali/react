// Dados do cardápio SEPARADOS da tela
// Export NOMEADO: quem importa usa chaves -> import { cardapio } from "./data/cardapio"
// Mais para frente, estes dados virãode uma API - por isso já ficam num arquivo próprio

export const cardapio = [
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