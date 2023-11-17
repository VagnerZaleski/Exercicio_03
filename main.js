const form = document.getElementById(`form-cadastro`);
const telefone = [];
const nomes = [];
let linhas = '';


form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById(`nome`);
    const inputTelefone = document.getElementById(`telefone`);

    if (telefone.includes(inputTelefone.value)) {
        alert(`O Telefone: ${inputTelefone.value} ja foi Cadastrado`);
    } else {
        telefone.push(inputTelefone.value);
        nomes.push(parseFloat(inputTelefone.value));

        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;        
        linha += `</tr>`;
        linhas += linha;

    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}