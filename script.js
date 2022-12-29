function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  /*  if (html.classList.contains("ligth")) {
    html.classList.remove("ligth")
  } else {
    html.classList.add("ligth")
  } */

  /* Pegar a tag img */
  const img = document.querySelector("#profile img")
  /* substituir a foto */
  if (html.classList.contains("ligth")) {
    // Se tiver a light mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/Avatar-ligth.png")
    img.setAttribute("alt", "Foto Davi Maldonado em fundo roxo")
  } else {
    // Se tiver a light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "Foto Davi Maldonado em fundo laranja")
  }
}
