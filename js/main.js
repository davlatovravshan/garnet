const form = document.querySelector('form')
const menuBurger = document.querySelector('.menu_burger')
const navSm = document.querySelector('.nav-sm')

const serviceItems = document.querySelectorAll('.service-item')
const serviceItemsTitle = document.querySelectorAll('.service-item__title')

menuBurger.addEventListener('click', function(event) {
	navSm.classList.toggle('active')
})


form.addEventListener('submit', function(event) {
	event.preventDefault()
})


serviceItemsTitle.forEach(function(serviceItemTitle) {

	serviceItemTitle.addEventListener('click', function() {

		const parent = serviceItemTitle.parentElement

		let activeItem = null
		serviceItems.forEach(function(item) {
			if (item !== parent && item.classList.contains('active')) {
				activeItem = item
			}
		})

		parent.classList.add('active')
		if (activeItem) {
			activeItem.classList.remove('active')
		}
	})

})