import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiperInstance
    const mediaQuery = window.matchMedia(breakpoint)

    const initSwiper = () => {
      if (mediaQuery.matches) {
        swiperInstance = new Swiper(swiperClass, {
          modules: [Navigation, Pagination],
          ...swiperSettings
        })
      } else {
        if (swiperInstance) {
          swiperInstance.destroy(true, true)
          swiperInstance = undefined
        }
      }
    }

    if (swiperClass === '.my-swiper3') {
      const container = document.querySelector('.main__swiper-price')
      mediaQuery.addListener(() => {
        if (!mediaQuery.matches && container) {
          container.style.display = 'none'
        } else if (container) {
          container.style.display = ''
        }
      })
    }

    mediaQuery.addListener(initSwiper)
    initSwiper()
  }

  resizableSwiper('(max-width: 767px)', '.my-swiper1', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.my-swiper2', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.my-swiper3', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination-3',
      clickable: true
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.querySelector('.button-open-list1')
  const closeButton = document.querySelector('.button-close-list1')
  const hiddenSlides = document.querySelectorAll('.dop-slide')
  const breakpoint = window.matchMedia('(max-width: 767px)')

  function toggleSlides() {
    if (breakpoint.matches) {
      hiddenSlides.forEach((slide) => {
        slide.style.display = 'flex'
      })

      openButton.closest('.open-close1').style.display = 'none'
      closeButton.closest('.open-close1').style.display = 'none'
    } else {
      hiddenSlides.forEach((slide) => {
        slide.style.display = 'none'
      })

      openButton.closest('.open-close1').style.display = 'flex'
      closeButton.closest('.open-close1').style.display = 'none'
    }
  }

  toggleSlides()

  breakpoint.addListener(toggleSlides)

  openButton.addEventListener('click', function () {
    hiddenSlides.forEach((slide) => {
      slide.style.display = 'flex'
    })
    openButton.closest('.open-close1').style.display = 'none'
    closeButton.closest('.open-close1').style.display = 'flex'
  })

  closeButton.addEventListener('click', function () {
    hiddenSlides.forEach((slide) => {
      slide.style.display = 'none'
    })
    closeButton.closest('.open-close1').style.display = 'none'
    openButton.closest('.open-close1').style.display = 'flex'
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.querySelector('.button-open-list2')
  const closeButton = document.querySelector('.button-close-list2')
  const hiddenSlides = document.querySelectorAll('.dop-slide2')
  const breakpoint = window.matchMedia('(max-width: 767px)')

  function toggleSlides() {
    if (breakpoint.matches) {
      hiddenSlides.forEach((slide) => {
        slide.style.display = 'flex'
      })

      openButton.closest('.open-close2').style.display = 'none'
      closeButton.closest('.open-close2').style.display = 'none'
    } else {
      hiddenSlides.forEach((slide) => {
        slide.style.display = 'none'
      })

      openButton.closest('.open-close2').style.display = 'flex'
      closeButton.closest('.open-close2').style.display = 'none'
    }
  }

  toggleSlides()

  breakpoint.addListener(toggleSlides)

  openButton.addEventListener('click', function () {
    hiddenSlides.forEach((slide) => {
      slide.style.display = 'flex'
    })
    openButton.closest('.open-close2').style.display = 'none'
    closeButton.closest('.open-close2').style.display = 'flex'
  })

  closeButton.addEventListener('click', function () {
    hiddenSlides.forEach((slide) => {
      slide.style.display = 'none'
    })
    closeButton.closest('.open-close2').style.display = 'none'
    openButton.closest('.open-close2').style.display = 'flex'
  })
})
