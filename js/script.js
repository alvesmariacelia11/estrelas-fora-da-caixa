const personagens = document.querySelectorAll('.personagem');

// Pega os itens da lista do HTML, os personagens na API e invoca o método "montaPersonagem"
pegarPersonagem = (index) => {

    return fetch('https://rickandmortyapi.com/api/character/' + geraNumero(), {
        method: 'GET',
        headers: {
            Accept: 'aplication/json',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        montaPersonagem(personagens[index], data);
    })
}

// Gera um número aleatório para localizar um personagem
geraNumero = () => {
    return Math.floor(Math.random() * 670) + 1;
}

// Responsável por alterar as informações do personagem no HTML
montaPersonagem = (conteiner, personagem) => {
    conteiner.querySelector(".nome").innerText = personagem.name;
    conteiner.querySelector(".status").innerText = personagem.status;
    conteiner.querySelector(".especie").innerText = personagem.species;
    conteiner.querySelector("img").src = personagem.image;
}

//Inicia o processo para atualizar os personagens, do primeiro ao quarto, neste ordem
pegarPersonagem(0);
pegarPersonagem(1);
pegarPersonagem(2);
pegarPersonagem(3);
