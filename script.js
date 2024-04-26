// https: //dog.ceo/api/breeds/image/random

const imagemRandomCachorro = document.getElementById("imagemRandomCachorro");
const botaoCachorro = document.getElementById("botaoCachorro");
const container = document.getElementById("container");

const mudarCachorro = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      imagemRandomCachorro.innerHTML = `<img src='${json.message}' height=300 width=300/>`;
    });
};

botaoCachorro.onclick = () => {
  container.style.height = "550px";
  mudarCachorro();
  botaoCachorro.innerText = "Mostrar cachorro diferente";
};
