const form = document.querySelector("form");
const loginBtn = document.querySelector("#login-btn");

const users = [
 { username: "Gui", password: "Marx" },
 { username: "Lucas", password: "Conti" },
 { username: "Wendel", password: "Dumil" },
{ username: "ALVES", password: "Gustavo" },
{ username: "Anderson", password: "Dton" },
{ username: "Rene", password: "Erisson" },
{ username: "Emilson", password: "Emilson123" },
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
   var audio = document.querySelector("audio");
   audio.play();
    document.body.classList.add("blur");
    setTimeout(function () {
      window.location.href = "./buscar.html";
    }, 1300);

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
  } else if (username === "" || password === "") {
    alert("Por favor, insira um nome de usuário e senha");
  } else {
    let p = document.querySelector('p');
    p.style.opacity = '1';
    
    let troll = document.querySelector('.troll')
    
    var wou = document.getElementById("wou");
    wou.play();
    
    troll.classList.add('scale');
  setTimeout(() => {
    troll.classList.remove('scale');
  }, 1400); 
    
    form.reset();
  }
  
const myParagraph = document.getElementById('myParagraph');

function hideParagraph() {
  myParagraph.style.opacity = '0';
}

setTimeout(hideParagraph, 3500);

  
});
