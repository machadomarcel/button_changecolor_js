function verde() {
	document.querySelector("#marcel").classList.remove("vermelho");
	document.querySelector("#marcel").classList.remove("azul");
	document.querySelector("#marcel").classList.add("verde");
}
function azul() {
	document.querySelector("#marcel").classList.remove("vermelho");
	document.querySelector("#marcel").classList.remove("verde");
	document.querySelector("#marcel").classList.add("azul");
}

function vermelho() {
	document.querySelector("#marcel").classList.remove("verde");
	document.querySelector("#marcel").classList.remove("azul");
	document.querySelector("#marcel").classList.add("vermelho");
}
