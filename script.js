//aqui começa o hamburger menu 
var botaoMenuHamburguer = document.querySelector("#hamburgerMenu");

function abrirMenu() {
	this.classList.toggle("clicked");
	var menu = document.querySelector("#hamburgerList");
	menu.classList.toggle("visible");
}

botaoMenuHamburguer.onclick = abrirMenu;


//aqui começa o social media scroll
var menuScroll = document.querySelector("#socialMediaScroll");
var menuUnscroll = document.querySelector("#socialMedia");

window.addEventListener("scroll", function(event){
if (window.scrollY > 70) {
	menuScroll.classList.add("visivel");
	menuUnscroll.classList.remove("visivel");
}
else {
	menuScroll.classList.remove("visivel");
	menuUnscroll.classList.add("visivel");
}
});


// var senadores = document.querySelectorAll('#senadores .senadoresBox');

// Seleciona o <select>
/*var party = document.querySelector('.party');
party.onchange = function (e) { // Quando a gente mudar o valor ...
	var filtrados = document.querySelectorAll('.senadoresBox.' + party.value)
	
	filtrados.forEach(function (senador) {
		senador.classList.add('selected');
	})

	O forEach:
	filtrados.forEach(function (senador) {

	})

	é a mesma coisa de fazer o for assim:
	for (var i = filtrados.length - 1; i >= 0; i--) {
		var senador = filtrados[i]
	}
}*/

//aqui começa o fitler de senadores por party and uf
var a, b;
var senadores = $('#senadores .senadoresBox');
function filterSenadores () {
	$(senadores).removeClass('selected').addClass('unselected');
	$('.senadoresBox.'+this.value).removeClass('unselected').addClass('selected');
	a = this.value;
}
$('.party').change(filterSenadores);


function filterUf () {
	if(this.value == 'senadoresBox') {
		$(senadores).removeClass('unselected').addClass('selected');
		return false;
	}
	b = this.value;
	$(senadores).removeClass('selected').addClass('unselected');

	var classePesquisa = '';
	if(a) {
		classePesquisa = '.'+a;
	}
	classePesquisa += '.uF'+this.value;

	$(classePesquisa).removeClass('unselected').addClass('selected');
}
$('.uf').change(filterUf);





//aqui começa a minha search bar
var senadoresFiltrados;
var containerSenadores = document.querySelector("#senadores");
var searchBar = document.querySelector(".searchName");

searchBar.addEventListener("keyup", function() {
	if(searchBar.value != "") {
		senadoresFiltrados = senadores.filter(function(senadorIndex, senador) {
			var name = senador.querySelector(".senadoresName");
			var party = senador.querySelector(".senadoresParty");
			var name = name.innerText.toLowerCase();
			var party = party.innerText.toLowerCase();
			if(name.indexOf(searchBar.value.toLowerCase()) > -1) {
				return senador;
			} else if(party.indexOf(searchBar.value.toLowerCase()) > -1) {
				return senador;
			}
		});	
	} else {
		while (containerSenadores.firstChild) {
		    containerSenadores.removeChild(containerSenadores.firstChild);
		}

		for(var i = 0; i < senadores.length; i++) {
			containerSenadores.appendChild(senadores[i]);
		}
	}

	while (containerSenadores.firstChild) {
	    containerSenadores.removeChild(containerSenadores.firstChild);
	}

	for(var i = 0; i < senadoresFiltrados.length; i++) {
		containerSenadores.appendChild(senadoresFiltrados[i]);
	}
})

