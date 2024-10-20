
    console.log('Página de cadastro')

 
    document.getElementById('meuform').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const num = document.getElementById('num').value;
    const cep = document.getElementById('cep').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    // exibição dos dados
    const result = document.getElementById('result');
    result.innerHTML = `<p>Nome: ${nome}</p> <p>Email: ${email}</p> <p>Telefone: ${tel}</p> <p>Cep: ${cep}</p> <p>CPF: ${cpf}</p>`;

});


