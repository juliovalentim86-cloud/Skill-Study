const botao = document.getElementById("acesso");
botao.addEventListener("click", function() { 
alert("Obrigado por ajudar outros alunos!")
});
const input = document.getElementById("pesquisa");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    alert("Está aí o que você quer aprender hoje!");
})
