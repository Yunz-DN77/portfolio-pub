const burger = document.querySelector('#burger')
const nav = document.querySelector('header nav')

burger.addEventListener('click', function () {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
})

document.addEventListener('click', function (e){
    if (!burger.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active')
        burger.classList.remove('active')
    }
}
)