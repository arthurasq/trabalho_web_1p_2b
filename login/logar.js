function ajuda(){
  location.replace("construcao.html")
}

function init(){
  document.getElementById("senha").addEventListener(salvar)
  document.getElementById("userMail").addEventListener( salvar)
}
function login() {
  var email = document.getElementById("userMail").value
  var senha = document.getElementById("password").value
  if("e-mail" in localStorage){
   document.getElementById("userMail").value = localStorage.getItem("e-mail")
 }
  if("senha" in localStorage){
   document.getElementById("password").value = localStorage.getItem("senha")
 }
  alert.log (email)
}
