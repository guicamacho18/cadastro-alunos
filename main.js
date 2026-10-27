
let alunos = ["Guilherme Camacho da Luz"];

const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const lista = document.getElementById("lista");

function mostrarAlunos() {
    lista.innerHTML = "";

    alunos.forEach(function(nome) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let novoNome = campoNome.value.trim();

    if (novoNome !== "") {
        alunos.push(novoNome);
        mostrarAlunos();
        campoNome.value = "";
    }
});

mostrarAlunos();
