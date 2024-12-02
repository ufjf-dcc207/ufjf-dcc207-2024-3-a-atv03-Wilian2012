import Animal from './Animal';
import './App.css';

function App() {

  return <div className="app">
        <Animal icone="🐻" nome="Urso" peso = {-1} exticao/> 
        
        <Animal icone="🐕‍🦺" nome="Cachorro" peso = {50} exticao/> 
      <Animal icone="🦍" nome="Gorila" peso = {200} exticao/> 
  
  </div>;

}

export default App;
