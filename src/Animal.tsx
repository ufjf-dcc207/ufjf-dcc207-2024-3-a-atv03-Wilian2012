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
        <div>{icone}</div>
        <div>{nome}</div>
        <div>{peso} Kg</div>
        <div>{exticao}</div>
    </div>
}