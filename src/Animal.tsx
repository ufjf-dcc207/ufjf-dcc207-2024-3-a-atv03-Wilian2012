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
        <div className="peso">{peso} Kg</div>
        <div className="exticao">{exticao}</div>
    </div>
}