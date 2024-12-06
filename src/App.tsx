import Animal from './Animal';
import './App.css';
import Exibicao from './Exibicao';

function App() {

  return <div className="app">
     <Exibicao abertura={new Date("2024-11-06T08:00-03:00")}
     fechamento={new Date("2024-11-06T12:00-03:00")} cercado="A1"/>
        <Animal icone="🐻" nome="Urso" peso = {-1} exticao/> 
        <Animal icone="🐕‍🦺" nome="Cachorro" peso = {50} exticao/> 
      
      <Exibicao abertura={new Date("2024-11-06T13:00-03:00")}
     fechamento={new Date("2024-11-06T17:00-03:00")} cercado="B1"/>
      <Animal icone="🦍" nome="Gorila" peso = {200} exticao/> 
  
  </div>;

}

export default App;
