const menu = document.querySelector('header menu')
const nav = document.querySelector('header nav')

menu.addEventListener('click', function(){
    nav.classList.toggle('active')
})

document.addEventListener('click', function(e){
    if (!menu.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active')
        menu.classList.remove('active')
    }
})

document.addEventListener('scroll', function(e){
    if (!menu.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active')
        menu.classList.remove('active')
    }
})
