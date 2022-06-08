function pinicial(){
  location.replace("index.html")
}
function denuncia(){
  location.replace("construcao.html")
}
function ajuda(){
  location.replace("construcao.html")
}

//possibilita escolher uma imagem da biblioteca do computador

var $ = document.querySelector.bind(document);

	var previewImg = $('.imagem');
	var fileChooser = $('.input-file');

	fileChooser.onchange = e => {
		var fileToUpload = e.target.files.item(0);
		var reader = new FileReader();
    reader.onload = e => previewImg.src = e.target.result;
		reader.readAsDataURL(fileToUpload);
	};

init()

function init(){
  document.getElementById("password").addEventListener("keyup", proximo)
  document.getElementById("mail").addEventListener("keyup", proximo)
  // O keyup faz com que no momento em que você está digitando jávai sendo salvo no localStorage programado no salvar
}

function proximo() {
  var mail = document.getElementById("mail").value
  var password = document.getElementById("password").value
  localStorage.setItem("mail", mail)
  localStorage.setItem("password", password)
}
