import React from 'react';
import 'intl';
import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';

//Reactotron.configure().useReactNative().connect();
//console.tron = Reactotron;

export default function App() {
  //console.tron.log({
    //curso: "alura"
  //});
  return <TelaPadrao><Rotas /></TelaPadrao>;
}