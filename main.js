
const lista = document.getElementById('lista');

function adicionarItemLista(animal) {
    const novoItem = document.createElement('li');
    novoItem.textContent = `ID: ${animal.id}, Nome: ${animal.nome}, Idade: ${animal.idade}, Raça: ${animal.raca}`;
    lista.appendChild(novoItem);
}

function cadastrarAnimal() {
    fetch('animal.json')
        .then(response => response.json())
        .then(animal => {
            adicionarItemLista(animal);
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}

const botaoCadastro = document.querySelector('button');
botaoCadastro.addEventListener('click', cadastrarAnimal);




fetch("https://66302733c92f351c03d923af.mockapi.io/animal") 
    .then(response => response.json())
    .then(data => {

        data.forEach(animal => {
            adicionarItemLista(animal);
        });
    })
    .catch(error => console.error('Erro ao obter os dados da API:', error));
