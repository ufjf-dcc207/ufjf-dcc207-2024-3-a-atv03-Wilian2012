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
  
  const exB2: ReactNode[] =[];

  for(let i=0; i< ANIMAIS.length;i++)
    {

      let ex = ANIMAIS[i][2]<200.0? exA1 :exB2;
     
       ex.push(
       <Animal 
          key={ANIMAIS[i][1]}
          icone={ANIMAIS[i][0]}
           nome={ANIMAIS[i][1]}
          peso={ANIMAIS[i][2]}
          exticao={ANIMAIS[i][3]}
          />
          );

      }
    

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
