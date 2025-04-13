document.addEventListener('DOMContentLoaded', function () {
  const menuPhoneBtn = document.querySelector('.button__footer-chat')
  const navCallBtn = document.querySelector('.navigation__button-chat') // Новая кнопка
  const callModal = document.querySelector('.feedback__conteiner')
  const closeCallBtn = callModal.querySelector('.button__close1')
  const mainContent = document.querySelector('.main__conteiner')

  function isTablet() {
    return window.matchMedia('(min-width:768px) and (max-width:1439px)').matches
  }

  function isDesktop() {
    return window.matchMedia('(min-width:1440px)').matches
  }

  function is1120() {
    return window.matchMedia(
      '(min-width:1120px) and (max-width:1439px)'
    ).matches
  }

  function isNavCallVisible() {
    return window.matchMedia('(min-width:768px) and (max-width:1119px)').matches
  }

  function toggleBlur(show) {
    if (show) {
      mainContent.classList.add('blurred')
      document.body.classList.add('no-scroll')
    } else {
      mainContent.classList.remove('blurred')
      document.body.classList.remove('no-scroll')
    }
  }

  function openCallModal() {
    if (is1120()) return
    callModal.classList.add('active')
    if (isTablet() || isDesktop()) {
      toggleBlur(true)
    }
  }

  menuPhoneBtn.addEventListener('click', openCallModal)

  if (navCallBtn) {
    navCallBtn.addEventListener('click', function () {
      if (isNavCallVisible()) {
        openCallModal()
      }
    })
  }

  function closeModal() {
    callModal.classList.remove('active')
    toggleBlur(false)
  }

  closeCallBtn.addEventListener('click', closeModal)

  document.addEventListener('click', function (event) {
    if (
      (isTablet() || isDesktop()) &&
      callModal.classList.contains('active') &&
      !event.target.closest('.feedback__conteiner') &&
      !event.target.closest('.button__footer-chat') &&
      !(isNavCallVisible() && event.target.closest('.navigation__button-chat'))
    ) {
      closeModal()
    }
  })
})
