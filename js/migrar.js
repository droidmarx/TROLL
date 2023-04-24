if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./index.html";
}

function handleClean() {
  const number = document.querySelector("#number").value;

  const endpoint = `https://wom.gvt.com.br:19900/wfm/mobile/migration/migrationPlatformTV.faces?backUrl=https%3A%2F%2Fgvt.etadirect.com%2Fmobility%2F&aid=${number}`;

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
  document.body.classList.add("blur");
  localStorage.removeItem("token");
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 500);
}

function handleBuscar() {
  window.location.href = "./buscar.html";
}
