document.addEventListener("DOMContentLoaded", function(){
    var fisrtLi = document.querySelector('.header .menuHeader > ul > li:first-child'),
        listMenu = document.querySelector('.header .menuHeader > ul > li:first-child .listMenu'),
        main = document.querySelector('.main');
    fisrtLi.addEventListener('click', function(){
        listMenu.classList.toggle("show");
        main.addEventListener('click',function(){
            listMenu.classList.remove("show");
        })
    })
},false)