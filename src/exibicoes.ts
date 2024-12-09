

type ExibicaoTuplaType=[string,string,string,AnimaisTuplaType[]];

type AnimaisTuplaType=[string,string,number,boolean];

const EXIBICOES: Array <ExibicaoTuplaType>=[
  ["A1","2024-11-06T08:00-03:00","2024-11-06T12:00-03:00",[
    ["🐻" ,"Urso", 190, true], 
    ["🐕‍🦺","Cachorro",50,true], 
    ["🦍" ,"Gorila" ,300,true], 
  ]],
  ["B2","2024-11-06T13:00-03:00","2024-11-06T17:00-03:00",[
    ["🦥" , "Preguica",80,false], 
  ]]
]

export  default EXIBICOES 