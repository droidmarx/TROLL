const form = document.querySelector("form");
const loginBtn = document.querySelector("#login-btn");

const users = [
  { username: "Gui", password: "Marx" },
  { username: "Rivaldo", password: "102030" },
{ username: "Emilson", password: "Emilson123" },
  { username: "Bigshark", password: "Bigdick" },
  { username: "Felipe", password: "Cheira" },
  { username: "Gustavo", password: "Alves" },
  { username: "Douglas", password: "Rosa" },
  { username: "Lucas", password: "Conti" },
  { username: "Rafael", password: "Borges" },
  { username: "Adriano", password: "270301" },
  { username: "Simone", password: "102030" },
  { username: "Leandro", password: "102030" },
  { username: "Dianini", password: "102030" },
{ username: "Dayvison", password: "102030" },
  // adicionar mais usuarios
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  let authenticated = false;
  for (let user of users) {
    if (user.username === username && user.password === password) {
      authenticated = true;
      break;
    }
  }

  if (authenticated) {
    document.body.classList.add("blur");
    setTimeout(function () {
      window.location.href = "./buscar.html";
    }, 500);

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
  } else if (username === "" || password === "") {
    alert("Por favor, insira um nome de usuário e senha");
  } else {
    alert("Usuário ou senha incorretos");
    form.reset();
  }
});
