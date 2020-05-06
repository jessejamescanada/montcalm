const navbar = document.querySelector('.nav-content')
const  sticky = navbar.offsetTop;
const burger = document.querySelector('.fa-bars')
const mNav = document.querySelector('.mobile-nav')

window.addEventListener('scroll', navScroll)
window.addEventListener('scroll', navOpacity)
burger.addEventListener('click', mobileNav)

function mobileNav(){
  if(mNav.style.display === 'block'){
    mNav.style.display = 'none'
  }else{
    mNav.style.display = 'block'
  }
  
}

// Navbar opacity functions
function navOpacity(){
  if(window.scrollY > 150){
    navbar.style.opacity = 0.9
  }else{
    navbar.style.opacity = 1
  }
}

function navScroll() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky')
  }
}