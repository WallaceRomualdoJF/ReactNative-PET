import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../componentes/StatusCarrinho';
import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: "Banho no Pet",
    preco: 80,
    descricao: "Não de banho no seu Pet! Mas se precisar nós damos.",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 100,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
    quantidade: 2
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 90,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantidade: 1
  },
  {
    id: 4,
    nome: "Antipulgas",
    preco: 80,
    descricao: "Uma dose da antipulga. Seu gato precisa de uma por ano.",
    quantidade: 1
  },
  {
    id: 5,
    nome: "Vermífugos",
    preco: 90,
    descricao: "Uma dose da vacina Vermífugos. Seu gato precisa de duas por ano.",
    quantidade: 1
  },
  {
    id: 6,
    nome: "Para Pássaros",
    preco: 14.42,
    descricao: "Seta Suplemento Polivitamínico Para Aves.",
    quantidade: 1
  },
  {
    id: 7,
    nome: "Para Pássaros",
    preco: 16.06,
    descricao: "Seta Muda Suplemento Vitamínico Passaros.",
    quantidade: 1
  }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <>
    <StatusCarrinho total={total} />
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}