import "./Animal.css";


interface AnimalProps {

    icone:string;
    nome: string;
    peso: number;
    exticao: boolean;
}
export default function Animal({icone,nome,peso, exticao}:

AnimalProps) {

   
        
            return <div className="animal">
             <div className="icone">{icone}</div>
            <div className="nome">{nome}</div>
            {peso>0.0?(
                <div className="peso">{peso} Kg</div>
            )
               :(
                <div className="peso">Desconhecido</div>
               )
            }
            
            
            {exticao && <div className="exticao">Em Extiçao</div>}
        </div>
        };

          
   