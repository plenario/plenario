//aqui começa o hamburger menu
var botaoMenuHamburguer = document.querySelector('#hamburgerMenu')

function abrirMenu() {
  this.classList.toggle('clicked')
  var menu = document.querySelector('#hamburgerList')
  menu.classList.toggle('visible')
}

botaoMenuHamburguer.onclick = abrirMenu

//aqui começa o social media scroll
var menuScroll = document.querySelector('#socialMediaScroll')
var menuUnscroll = document.querySelector('#socialMedia')

window.addEventListener('scroll', function(event) {
  if (window.scrollY > 70) {
    menuScroll.classList.add('visivel')
    menuUnscroll.classList.remove('visivel')
  } else {
    menuScroll.classList.remove('visivel')
    menuUnscroll.classList.add('visivel')
  }
})

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
var a, b
var senadores = $('#senadores .senadoresBox')
function filterSenadores() {
  $(senadores).removeClass('selected').addClass('unselected')
  $('.senadoresBox.' + this.value)
    .removeClass('unselected')
    .addClass('selected')
  a = this.value
}
$('.party').change(filterSenadores)

function filterUf() {
  if (this.value == 'senadoresBox') {
    $(senadores).removeClass('unselected').addClass('selected')
    return false
  }
  b = this.value
  $(senadores).removeClass('selected').addClass('unselected')

  var classePesquisa = ''
  if (a) {
    classePesquisa = '.' + a
  }
  classePesquisa += '.uF' + this.value

  $(classePesquisa).removeClass('unselected').addClass('selected')
}
$('.uf').change(filterUf)

//aqui começa a minha search bar
var senadoresFiltrados
var containerSenadores = document.querySelector('#senadores')
/* var searchBar = document.querySelector('.searchName')

searchBar.addEventListener('keyup', function() {
  if (searchBar.value != '') {
    senadoresFiltrados = senadores.filter(function(senadorIndex, senador) {
      var name = senador.querySelector('.senadoresName')
      var party = senador.querySelector('.senadoresParty')
      var name = name.innerText.toLowerCase()
      var party = party.innerText.toLowerCase()
      if (name.indexOf(searchBar.value.toLowerCase()) > -1) {
        return senador
      } else if (party.indexOf(searchBar.value.toLowerCase()) > -1) {
        return senador
      }
    })
  } else {
    while (containerSenadores.firstChild) {
      containerSenadores.removeChild(containerSenadores.firstChild)
    }

    for (var i = 0; i < senadores.length; i++) {
      containerSenadores.appendChild(senadores[i])
    }
  }

  while (containerSenadores.firstChild) {
    containerSenadores.removeChild(containerSenadores.firstChild)
  }

  for (var i = 0; i < senadoresFiltrados.length; i++) {
    containerSenadores.appendChild(senadoresFiltrados[i])
  }
}) */

// Form Functions
let $formNewsLetter = $('.js-form-newsletter')
let timer

let handleForm = function(event) {
  event.preventDefault()
  let contact = {
    name: $('.js-form-name'),
    from: $('.js-form-email'),
  }
  let validationContact = validadeContact(contact)
  if (!validationContact) {
    clearTimeout(timer)
    timer = setTimeout(function() {
      sendMail(contact)
        .done(function(response) {
          handleFeedback.success('Email Cadastrado com sucesso!')
          cleanForm(contact)
        })
        .fail(function(error) {
          handleFeedback.error(
            'Não foi possível cadastrar seu e-mail, tente mais tarde.',
          )
          console.log(error)
        })
    }, 500)
  } else {
    handleFeedback.error(validationContact)
  }
}

let handleFeedback = {
  feedbackElement: $('.newsletter__feedback-message'),
  errorClass: 'is-error',
  success(message) {
    this.feedbackElement.removeClass('is-invisible')
    this.feedbackElement.removeClass(this.errorClass)
    this.feedbackElement.text(message)
  },
  error(message) {
    this.feedbackElement.removeClass('is-invisible')
    this.feedbackElement.addClass(this.errorClass)
    this.feedbackElement.text(message)
  },
}

let validadeContact = function(contact) {
  let error = ''
  if (!contact.name.val()) {
    error = 'Por favor, preencha o campo NOME'
  } else if (!contact.from.val()) {
    error = 'Por favor, preencha o campo EMAIL'
  }
  return error
}

let cleanForm = function(contact) {
  contact.name.val('')
  contact.from.val('')
}

let sendMail = function(contact) {
  return $.ajax({
    url: 'https://plenario.herokuapp.com/mail',
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      name: contact.name.val(),
      from: contact.from.val(),
    }),
  })
}

$formNewsLetter.on('submit', handleForm)
