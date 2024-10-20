
console.log('Página de cadastro')

function validarFormulario() {
    const nome = document.getElementById("nome").value;
    if (nome === "") {
        alert("Por favor, preencha o nome.");
        return false;
    }
    return true;
}

