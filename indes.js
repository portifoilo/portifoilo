const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");


/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */
if (theme === "dark") document.body.classList.add("dark");

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
    let text = document.getElementById("toggle").innerHTML; 
    document.getElementById("toggle").innerHTML = text.replace("Escuro", "Claro");
  }  
  if (theme !== "dark"){
  window.localStorage.setItem("theme", "dark");
  let text = document.getElementById("toggle").innerHTML; 
  document.getElementById("toggle").innerHTML = text.replace("Claro", "Escuro");
  }
});

refresh.addEventListener("click", () => {
  window.location.reload();
});
console.log(window.localStorage.getItem("theme"))

