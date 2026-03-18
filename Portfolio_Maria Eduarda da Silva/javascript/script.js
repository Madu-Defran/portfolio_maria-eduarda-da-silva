// APLICAR TEMA SALVO
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  document.body.classList.add("escuro");
}

// BOTÃO ALTERAR TEMA
const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

// SALVAR NO LOCALSTORAGE
  if (document.body.classList.contains("escuro")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});

// PEGAR ELEMENTOS
const form = document.getElementById("formContato");
const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");
const mensagemModal = modal.querySelector("p");

// EVENTO DE ENVIO DO FORMULÁRIO
form.addEventListener("submit", function(event){
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // VALIDAR CAMPOS VAZIOS (mostrar msg de aviso para usuario)
  if(nome === "" || email === "" || mensagem === ""){
    mostrarModal("Preencha todos os campos!");
    return;
  }

  // VALIDAR EMAIL 
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailValido.test(email)){
    mostrarModal("Digite um e-mail válido!"); // usuario digitou um email invalido
    return;
  }

  // SUCESSO (usuario digitou todos os campos corretamente)
  mostrarModal("Mensagem enviada com sucesso!");

  // LIMPAR FORMULÁRIO
  form.reset();
});


// FUNÇÃO PARA MOSTRAR MODAL
function mostrarModal(msg){
  mensagemModal.textContent = msg;
  modal.style.display = "block";
}

// FECHAR MODAL - clicando no X
fecharModal.addEventListener("click", function(){
  modal.style.display = "none";
});

// FECHAR MODAL - clicando fora
window.addEventListener("click", function(event){
  if(event.target === modal){
    modal.style.display = "none";
  }
});




