const botaoSim = document.querySelector(".sim");
const botaoNao = document.querySelector(".não");

botaoSim.addEventListener("click", () => {
  window.location.href = "cat.html";
});

function moverBotaoNao() {
  const larguraTela = window.innerWidth - botaoNao.offsetWidth;
  const alturaTela = window.innerHeight - botaoNao.offsetHeight;

  const posX = Math.floor(Math.random() * larguraTela);
  const posY = Math.floor(Math.random() * alturaTela);

  botaoNao.style.position = "absolute";
  botaoNao.style.left = posX + "px";
  botaoNao.style.top = posY + "px";
}

botaoNao.addEventListener("mousedown", (e) => {
  e.preventDefault();
  moverBotaoNao();
});
