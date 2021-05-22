document.addEventListener('DOMContentLoaded', function () {
    var search = document.querySelector('.header .contentHeader .search'),
        login = document.querySelector('.header .contentHeader .login'),
        inputInfo = document.querySelector('.header .contentHeader .search input'),
        wrapperH = document.querySelector('.wrapper .header'),
        shopping = document.querySelector('.header .contentHeader .shopping_cart'),
        header = document.querySelector('.header .menuHeader'),
        logo = document.querySelector('.header .contentHeader a.logo'),
        main = document.querySelector('.main .product .wrapperNewProducts .newArrival'),
        slideProduct = document.querySelector('.main .product .wrapperSlideProduct .slideProduct'),
        nextButton = document.querySelector('.main .product .wrapperSlideProduct .nextSlide'),
        backButton = document.querySelector('.main .product .wrapperSlideProduct .backSlide'),
        shopSystem = document.querySelector('.wrapperStoreSystem .storeSystem'),
        loads3 = 'duoi',
        loadSlideProduct = 'duoi',
        loadShop = 'duoi',
        loading = main.offsetTop - 10,
        loading2 = slideProduct.offsetTop - 30,
        loading3 = shopSystem.offsetTop - 1000,
        status = 'than100';
    window.addEventListener('scroll',function (){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 100){
            if(status == 'than100'){
                status = 'less100';
                search.classList.add('changeSearch');
                inputInfo.classList.add('changeInput');
                login.classList.add('changeLogin');
                wrapperH.classList.add('changeWrapperH');
                shopping.classList.add('changeShopping');
                header.classList.add('changeHeader');
                logo.classList.add('changeLogo');
            }
        }
        else 
        if(window.pageYOffset < 100){
            if(status == 'less100'){
            status = 'than100';
            search.classList.remove('changeSearch');
            inputInfo.classList.remove('changeInput');
            login.classList.remove('changeLogin');
            wrapperH.classList.remove('changeWrapperH');
            shopping.classList.remove('changeShopping');
            header.classList.remove('changeHeader');
            logo.classList.remove('changeLogo');
            }
        }
        if(window.pageYOffset > loading){
            if(loads3=="duoi"){
                main.classList.add('up');
                loads3="tren";     
            }
        }
        if(window.pageYOffset > loading2){
            if(loadSlideProduct =="duoi"){
                slideProduct.classList.add('up2');
                backButton.classList.add('up2');
                nextButton.classList.add('up2');
                loadSlideProduct ="tren";     
            }
        }
        if(window.pageYOffset > loading3){
            console.log(window.pageYOffset);
            if(loadShop=="duoi"){
                shopSystem.classList.add('up3');
                loadShop="tren";     
            }
        }
    })

}, false)