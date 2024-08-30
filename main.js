const form = document.getElementById('form-contato');
const inputTelefone = document.getElementById('telefone-contato');
const contatos = [];
let linhas = '';

inputTelefone.addEventListener('input', function (e) {
    let telefone = e.target.value.replace(/\D/g, ''); 

    if (telefone.length > 0) {
        telefone = '(' + telefone;
    }
    if (telefone.length > 3) {
        telefone = telefone.slice(0, 3) + ') ' + telefone.slice(3);
    }
    if (telefone.length > 10) {
        telefone = telefone.slice(0, 10) + '-' + telefone.slice(10, 14);
    }

    e.target.value = telefone;
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.some(contato => contato.nome === inputNomeContato.value)) {
        alert(`O contato com o nome: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push({ nome: inputNomeContato.value, telefone: inputTelefoneContato.value });

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
