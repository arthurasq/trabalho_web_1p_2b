function logar(){
  location.replace("logar.html")
}
function pinicial(){
  location.replace("index.html")
}
function denuncia(){
  location.replace("construcao.html")
}
function ajuda(){
  location.replace("construcao.html")
}
function esqSenha(){
  location.replace("recuperar.html")
}
function init(){
  document.getElementById("password").addEventListener(salvar)
  document.getElementById("userMail").addEventListener( salvar)
}
function login() {
  var userMail = document.getElementById("userMail").value
  var password = document.getElementById("password").value
  if("userMail" in localStorage){
   document.getElementById("userMail").value = localStorage.getItem("mail")
 }
  if("password" in localStorage){
   document.getElementById("password").value = localStorage.getItem("password")
 }
}
