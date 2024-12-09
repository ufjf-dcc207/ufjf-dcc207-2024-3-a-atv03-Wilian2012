import { ReactNode } from 'react';
import Animal from './Animal';
import './App.css';
import Exibicao from './Exibicao';

function App() {

  const exA1: ReactNode[]=[
  
    <Animal icone="🐻" nome="Urso" peso = {-1} exticao/>, 
    <Animal icone="🐕‍🦺" nome="Cachorro" peso = {50} exticao/> 
  
  ];
  
  const exB2: ReactNode[] =[
    
    <Animal icone="🦍" nome="Gorila" peso = {200} exticao/>, 
    <Animal icone="🦥" nome="Preguica" peso = {100} exticao/> 


  ];

  return <div className="app">
     <Exibicao 
      abertura={new Date("2024-11-06T08:00-03:00")}
      fechamento={new Date("2024-11-06T12:00-03:00")} cercado="A1"
      > {exA1}
      
      
      
      </Exibicao>
      <Exibicao
      
          abertura={new Date("2024-11-06T13:00-03:00")}
          fechamento={new Date("2024-11-06T17:00-03:00")} 
          cercado="B1"
      >{exB2}

  
  </Exibicao>
  </div>;

}

export default App;
