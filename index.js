const button = document.getElementById("moveButton");
const parabensBtn = document.getElementById("simButton");

button.addEventListener("mouseover", () => {
  const width = window.innerWidth - button.clientWidth;
  const height = window.innerHeight - button.clientHeight;
  const newLeft = Math.floor(Math.random() * width);
  const newTop = Math.floor(Math.random() * height);

  button.style.left = `${newLeft}px`;
  button.style.top = `${newTop}px`;
});


parabensBtn.addEventListener("click", () => {
  const width = 300;
  const height = 200;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const popup = window.open("", "simButton", `width=${width},height=${height},left=${left},top=${top}`);
  popup.document.write("<h1>Parabéns!</h1><p>Se fu***, agora estamos namorando!!</p><p> love u <3</p>");
});
