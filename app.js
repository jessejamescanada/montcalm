const navbar = document.querySelector('.nav-content')
const  sticky = navbar.offsetTop;

window.addEventListener('scroll', navScroll)
window.addEventListener('scroll', navOpacity)

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