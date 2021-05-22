document.addEventListener('DOMContentLoaded', function () {
    var heart = document.querySelectorAll('.s_productPhoto .heartFavorite');
    for (var i = 0; i < heart.length; i++) {
        heart[i].addEventListener('click', function () {
          this.classList.toggle('addToFavorite');
        })
    }
}, false)