const navEl = document.querySelector('.nav')
const buttonEl = document.querySelector('.nav-toggle')
const headerEl = document.querySelector('.header')

buttonEl.addEventListener('click', function(){
    if(navEl.classList.contains('active')){
        navEl.classList.remove('active')
    }else{
        navEl.classList.add('active')
    }
})

window.addEventListener('scroll', function(event){
    if(window.scrollY >= 35){
        headerEl.classList.add('scrolled')
    }else{
        headerEl.classList.remove('scrolled')
    }
})