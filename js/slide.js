document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelectorAll(".changeSlide ul li"),
        slides = document.querySelectorAll(".slide ul li"),
        times = setInterval(function () { autoSlide(); }, 4000);
       
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
            clearInterval(times);
            for (var j = 0; j < button.length; j++) {
                button[j].classList.remove("active");
            }
            this.classList.add("active");
            var locationOfButton = this;
            for (var location = 0; locationOfButton = locationOfButton.previousElementSibling; location++) {
            }
            for (var j = 0; j < slides.length; j++) {
                slides[j].classList.remove("activeSlide");
                slides[location].classList.add("activeSlide");
            }
        })
    }
    function autoSlide() {
        var curentSlide = document.querySelector(".slide ul li.activeSlide");
        for (var location = 0; curentSlide = curentSlide.previousElementSibling; location++) { }
        if (location < (slides.length - 1)) {
            for (var a = 0; a < button.length; a++) {
                slides[a].classList.remove("activeSlide");
                button[a].classList.remove("active");
            }
            slides[location].nextElementSibling.classList.add("activeSlide");
            button[location].nextElementSibling.classList.add("active");
        } else {
            for (var a = 0; a < slides.length; a++) {
                slides[a].classList.remove("activeSlide");
                button[a].classList.remove("active");
            }
            slides[0].classList.add("activeSlide");
            button[0].classList.add("active");
        }
    }
}, false)