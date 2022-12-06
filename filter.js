// Array de Objetos
const arr = [
    {
        nome: "Xandy",
        idade: 21,
        nacionalidade: "Brasil",
        cargo: "Programador"
    },
    {
        nome: "Marcela",
        idade: 21,
        nacionalidade: "Portugal",
        cargo: "Engenheira de Software"
    },
    {
        nome: "João Victor",
        idade: 35,
        nacionalidade: "Espanha",
        cargo: "Arquiteto"
    },
    {
        nome: "Sophia",
        idade: 29,
        nacionalidade: "Brasil",
        cargo: "Astronauta"
    },
];

// Função para filtrar
const Filter = (event) => {
    
    return arr.filter(obj => {
        
        return Object.values(obj).map(item => {
            
              return (item === null ? "" : item.toString().includes(event.target.value.toString()));
            
        }).includes(true);
        
    });
    
}

// Execução da função e log dos resultados
const inputBox = document.getElementById("inputBox");
inputBox.addEventListener('change', (event) => {
    let result = Filter(event);
    console.log(result)
})