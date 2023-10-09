const squares = document.querySelectorAll(".square");

function initializeSquare(square) {
  const squareNumber = square.id.replace("square", ""); // Obtén el número de cuadradito
  const isGreen = localStorage.getItem(`isGreen${square.id}`);

  if (isGreen === "false") {
    // Si el estado almacenado es rojo, cambia a rojo
    square.style.backgroundColor = "red";
    square.querySelector("span").textContent = `Computadora ${squareNumber} ocupado`;
  } else {
    // De lo contrario, se mantiene en verde
    square.style.backgroundColor = "green";
    square.querySelector("span").textContent = `Computadora ${squareNumber} disponible`;
  }
}

function toggleColor(square) {
  const squareNumber = square.id.replace("square", ""); // Obtén el número de cuadradito
  const isGreen = localStorage.getItem(`isGreen${square.id}`);

  if (isGreen === "false") {
    // Cambia a verde
    square.style.backgroundColor = "green";
    square.querySelector("span").textContent = `Computadora ${squareNumber} disponible`;
    localStorage.setItem(`isGreen${square.id}`, "true");
  } else {
    // Cambia a rojo
    square.style.backgroundColor = "red";
    square.querySelector("span").textContent = `Computadora ${squareNumber} ocupado`;
    localStorage.setItem(`isGreen${square.id}`, "false");
  }
}

squares.forEach((square) => {
  initializeSquare(square); // Inicializa el estado de cada cuadradito

  square.addEventListener("click", () => {
    toggleColor(square);
  });
});
