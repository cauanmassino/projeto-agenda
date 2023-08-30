// Seleciona o formulário de adicionar tarefa
const formAdicionarTarefa = document.querySelector('#form-adicionar-tarefa');

// Seleciona a lista de tarefas
const listaTarefas = document.querySelector('#lista-tarefas');

// Seleciona o campo de entrada de texto
const inputNovaTarefa = document.querySelector('#input-nova-tarefa');

// Adiciona um ouvinte de eventos ao formulário
formAdicionarTarefa.addEventListener('submit', function(event) {
	// Previne o envio padrão do formulário
	event.preventDefault();

	// Seleciona o valor do campo de entrada de texto
	const novaTarefa = inputNovaTarefa.value;

	// Verifica se o campo de entrada de texto não está vazio
	if (novaTarefa.trim() !== '') {
		// Cria um novo item de lista <li>
		const novoItemLista = document.createElement('li');

		// Define o texto do novo item de lista
		novoItemLista.innerText = novaTarefa;

		// Adiciona o novo item de lista à lista de tarefas
		listaTarefas.appendChild(novoItemLista);

		// Limpa o campo de entrada de texto
		inputNovaTarefa.value = '';
	} else {
		// Exibe uma mensagem de erro
		alert('Por favor, insira uma tarefa antes de adicionar!');
	}
});
