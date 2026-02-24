const botaoRegistrar = document.getElementById("botao_registrar");
const telaLogin = document.getElementById("tela_de_login");
const telaRegistro = document.getElementById("tela_de_registro");
const botaoVoltar = document.getElementById("botao_voltar");
const olhos = document.querySelectorAll(".mostrar-senha");

botaoRegistrar.addEventListener("click", () => {
  telaLogin.style.display = "none";
  telaRegistro.style.display = "flex";
});

botaoVoltar.addEventListener("click", () => {
  telaRegistro.style.display = "none";
  telaLogin.style.display = "flex";
});

olhos.forEach((olho) => {
  olho.addEventListener("click", () => {
    const inputSenha = olho.parentElement.querySelector("input");
    if (inputSenha.type === "password") {
      inputSenha.type = "text";
    } else {
      inputSenha.type = "password";
    }
  });
});
