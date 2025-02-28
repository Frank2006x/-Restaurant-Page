import './styles.css'
import myIcon from './asset/logo.svg'
import init from './init_page.js'
import menu_items from './menu.js'
import aboutus from './about.js'

const iconEle = document.getElementById('icon')
iconEle.src = myIcon
const home = document.getElementById('home_nav')
const menu = document.getElementById('menu_nav')
const about = document.getElementById('about_nav')
const content = document.getElementById('content')

function clearContent() {
  content.innerHTML = ''
}
init()
home.addEventListener('click', (event) => {
  event.preventDefault() // Prevent default link behavior
  content.style.flexDirection = 'row'
  content.style.gap = '0rem'
  clearContent()
  init()
})

menu.addEventListener('click', (event) => {
  event.preventDefault()
  clearContent()
  content.style.flexDirection = 'column'
  content.style.gap = '6rem'

  menu_items()
})

about.addEventListener('click', (event) => {
  event.preventDefault()
  content.style.flexDirection = 'row'
  clearContent()
  aboutus()
})

// iwrhoruio
