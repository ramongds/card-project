function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    const img = document.querySelector("#profile img")
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar_light.png")
      img.setAttribute("alt", "Avatar de Ramon Gomes com óculos dando joinha")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute("alt", "Avatar de Ramon Gomes")
    }
    }
  
  