const headerSearch = document.querySelector('.header__nav-item--search')
const headerSearchIcon = document.querySelector('.header__nav-item--search>div')

headerSearch.onclick = (e) => {
	e.stopPropagation()
}

function closeInput(e) {
	e.stopPropagation()
	headerSearch.classList.remove('search-active')
}

document.addEventListener('click', closeInput)
headerSearchIcon.addEventListener('click', () =>
	headerSearch.classList.toggle('search-active')
)
