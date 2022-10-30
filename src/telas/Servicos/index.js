import React from 'react';
import { SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Item from './Item';
import estilosGlobal from '../../estilos';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 80,
    descricao: "NÃO DE BANHO NO SEU PET! Mas se precisar nós damos."
  },

  {
    id: 2,
    nome: "Vacina V4",
    preco: 100,
    descricao: "Uma dose da vacina V4. Seu PET precisa de duas."
  },

  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 90,
    descricao: "Uma dose da vacina antirrábica. Seu PET precisa de uma por ano."
  },

  {
    id: 4,
    nome: "Vacina Antipulga",
    preco: 80,
    descricao: "Uma dose da vacina Antipulga. Seu gato precisa de uma por ano.",
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

export default function Serviços(){
  return(
    <SafeAreaView style = {estilosGlobal.preencher}>
      <KeyboardAvoidingView behavior = {Platform.OS == "ios" ? "padding" : "height"} style = {estilosGlobal.preencher}>
        <FlatList 
          data = {servicos}  
          renderItem = {({item}) => <Item {...item}/>}
          keyExtractor = {({id}) => String(id)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  ) 
}