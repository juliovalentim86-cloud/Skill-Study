const botao = document.getElementById("acesso");
botao.addEventListener("click", function() { 
alert("Obrigado por ajudar outros alunos!")
});
const form = document.getElementById("estudo");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Está aí o que você quer aprender hoje!");
})