const form = document.querySelector('form')

const body = document.querySelector('body')

window.addEventListener('mousemove', (e) => {

  if (e.screenY > 10) {
    body.style.backgroundColor = 'rgb(140, 136, 136)'
    form.style.visibility = 'visible'

  }
})