document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const numeroA = parseFloat(document.getElementById("campoA").value);
    const numeroB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (numeroB > numeroA) {
        mensagem.textContent = "Formulário válido! B é maior que A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! B deve ser maior que A.";
        mensagem.style.color = "red";
    }

    // Limpa os campos após a resposta
    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
});