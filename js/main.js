const form = document.querySelector('form')
const menuBurger = document.querySelector('.menu_burger')
const navSm = document.querySelector('.nav-sm')



menuBurger.addEventListener('click', function(event) {
	navSm.classList.toggle('active')
})


form.addEventListener('submit', function(event) {
	event.preventDefault()
})