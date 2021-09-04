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
		openServiceTab(parent)
	})

})

function openServiceTab(openElem) {
	let activeItem = null
	serviceItems.forEach(function(item) {
		if (item !== parent && item.classList.contains('active')) {
			activeItem = item
		}
	})

	openElem.classList.add('active')
	if (activeItem) {
		activeItem.classList.remove('active')
	}
}

function getServiceByOrder(order) {
	let length = serviceItems?.length || 0
	return serviceItems?.[length - order]
}

function viewAndOpenTab(order) {

	const block = document.querySelector('#services');

	block.scrollIntoView({
		block: 'center',
		behavior: 'smooth'
	})

	const elem = getServiceByOrder(order)
	if (elem && !elem.classList.contains('active')) {
		openServiceTab(elem)
	}
}
