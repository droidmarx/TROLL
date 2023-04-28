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

if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./index.html";
}

function handleClean() {
  const number = document.querySelector("#number").value;

  const endpoint = `https://wom.gvt.com.br:19900/wfm/certificationClean/certificationClean.faces?&aid=${number}&userlogin=x&atoken=gvt`;

  const iframe = document.querySelector("#certification-frame");
  if (iframe) {
    iframe.remove();
  }

  const newIframe = document.createElement("iframe");
  newIframe.id = "certification-frame";
  newIframe.src = endpoint;
  document.body.appendChild(newIframe);
}

function handleLogout() {
  localStorage.removeItem("token");
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 200);
}
