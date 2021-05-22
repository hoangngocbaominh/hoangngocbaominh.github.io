document.addEventListener('DOMContentLoaded', function () {
    var next = document.querySelector('.main .product .wrapperSlideProduct .nextSlide'),
        previous = document.querySelector('.main .product .wrapperSlideProduct .backSlide'),
        slideProduct = document.querySelector('.main .product .wrapperSlideProduct .slideProduct'),
        slideItem = document.querySelectorAll('.main .product .wrapperSlideProduct .slideProduct .s_productItem');
    next.addEventListener('click', function () {
        var slideChild = slideProduct.children[0];

        slideProduct.removeChild(slideChild);
        slideProduct.appendChild(slideChild);
        // slideProduct.children.forEach(function (element) {
        //     element.classList.add("aaa");
        // })
        slideChild.classList.add('aa');
    })
    previous.addEventListener('click', function () {
        var slideChild2 = slideProduct.children[6];
        slideProduct.removeChild(slideChild2);
        slideProduct.insertBefore(slideChild2, slideProduct.firstChild);
    })
}, false)