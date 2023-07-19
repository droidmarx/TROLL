const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Obtém os itens do menu 
const menuItems = document.querySelectorAll("#menu li a");

// Função para remover a classe "active" do elemento de navegação 
function removeActiveClass() {
  const nav = document.getElementById("nav");
  nav.classList.remove("active");
}

// Adiciona o evento de clique a cada item do menu 
menuItems.forEach(function(item) {
  item.addEventListener("click", removeActiveClass);
});

// Mostrar Limpar
function mostrarLimpar() {
  document.getElementById('limpar').style.display = 'block';
  document.getElementById('migrar').style.display = 'none';
  
}

// Mostrar Migrar
function mostrarMigrar() {
  document.getElementById('migrar').style.display = 'block';
  document.getElementById('limpar').style.display = 'none';
}


// Limpar Loading
function handleClean() {
 var audio = document.querySelector("audio");
   audio.play();
  const loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'flex';
  const number = document.querySelector("#number").value;
  const endpoint = `https://wom.gvt.com.br:19900/wfm/certificationClean/certificationClean.faces?&aid=${number}&userlogin=x&atoken=gvt`;
  const iframe = document.querySelector("#certification-frame");
  if (iframe) {
    iframe.remove();
  }
  const newIframe = document.createElement("iframe");
  newIframe.id = "certification-frame";
  newIframe.src = endpoint;
  newIframe.addEventListener('load', () => {
    loadingContainer.style.display = 'none';
  });
  document.body.appendChild(newIframe);
}

// Migrar Loading
function handleMigrate() {
 var audio = document.querySelector("audio");

   audio.play();
  const loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'flex';
  const number = document.querySelector("#number").value;
  const endpoint = `https://wom.gvt.com.br:19900/wfm/mobile/migration/migrationPlatformTV.faces?backUrl=https%3A%2F%2Fgvt.etadirect.com%2Fmobility%2F&aid=${number}`;
  const iframe = document.querySelector("#certification-frame");
  if (iframe) {
    iframe.remove();
  }
  const newIframe = document.createElement("iframe");
  newIframe.id = "certification-frame";
  newIframe.src = endpoint;
  newIframe.addEventListener('load', () => {
    loadingContainer.style.display = 'none';
  });
  document.body.appendChild(newIframe);
}

// Logout
function handleLogout() {
  localStorage.removeItem("token");
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 200);
}

// Verificar token e redirecionar para a página de login se não estiver logado
if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./index.html";
}
