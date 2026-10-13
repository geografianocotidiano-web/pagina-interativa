// Variável para armazenar o ano atual
const anoAtual = new Date().getFullYear();

// Função para calcular idade
function calcularIdade() {
    const nome = document.getElementById("nome").value;
    const anoNascimento = document.getElementById("ano").value;
    const resultado = document.getElementById("resultado");

    if (nome === "" || anoNascimento === "") {
        resultado.textContent = "Por favor, preencha todos os campos.";
        resultado.style.color = "red";
        return;
    }

    const idade = anoAtual - anoNascimento;

    if (idade < 0 || idade > 120) {
        resultado.textContent = "Ano de nascimento inválido.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = `${nome}, você tem aproximadamente ${idade} anos.`;
        resultado.style.color = "green";
    }
}

// Evento de clique no botão
document.getElementById("btnCalcular").addEventListener("click", calcularIdade);
