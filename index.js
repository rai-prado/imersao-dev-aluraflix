function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito, nomeFilme);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
  //entre aspas quer dizer que o campo ficará vazio, após clicar no input filme
}

function listarFilmesNaTela(url, nome) {
  var elementoFilmeFavorito =
    "<div onClick=this.remove()><img src=" +
    url +
    ">" +
    "<p>" +
    nome +
    "</p></div>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
