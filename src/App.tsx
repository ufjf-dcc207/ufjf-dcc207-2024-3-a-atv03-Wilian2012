import { ReactNode } from 'react';
import Animal from './Animal';
import './App.css';
import Exibicao from './Exibicao';

type AnimaisTuplaType=[string,string,number,boolean]
const ANIMAIS : AnimaisTuplaType[]=[

    ["🐻" ,"Urso", 190, true], 
    ["🐕‍🦺","Cachorro",50,true], 
    ["🦍" ,"Gorila" ,300,true], 
    ["🦥" , "Preguica",80,false], 

];
function App() {

  const exA1: ReactNode[]=[];
  
  const exB2: ReactNode[] = ANIMAIS.map(function(animal){
  
    return (
    <Animal 
       key={animal[1]}
       icone={animal[0]}
        nome={animal[1]}
       peso={animal[2]}
       exticao={animal[3]}
       />
      );
  });
  
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
