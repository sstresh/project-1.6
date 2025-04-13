document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.burger-button-menu')
  const closeButton = document.querySelector('.button__header-close')
  const menuContainer = document.querySelector('.menu__side-conteiner')
  const mainContent = document.querySelector('.main__conteiner')
  const body = document.body

  menuButton.addEventListener('click', function () {
    menuContainer.classList.add('active')
    mainContent.classList.add('blurred')
    body.classList.add('menu-open')
  })
  closeButton.addEventListener('click', function () {
    menuContainer.classList.remove('active')
    mainContent.classList.remove('blurred')
    body.classList.remove('menu-open')
  })
  document.addEventListener('click', function (event) {
    if (
      menuContainer.classList.contains('active') &&
      !event.target.closest('menu__side-conteiner') &&
      !event.target.closest('.navigation__button-menu')
    ) {
      menuContainer.classList.remove('active')
      mainContent.classList.remove('blurred')
      body.classList.remove('menu-open')
    }
  })
})
