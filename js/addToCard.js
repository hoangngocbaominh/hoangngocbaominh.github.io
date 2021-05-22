document.addEventListener('DOMContentLoaded', function(){
    var addToCardButton = document.querySelectorAll('.add-to-card');
    for(let index = 0; index < addToCardButton.length; index++){
        button = addToCardButton[index];
        button.addEventListener('click', addToCardButtonClicked);
    }
})

function addToCardButtonClicked(event){
    var clickedButton = event.target;
    var product = clickedButton.parentElement.parentElement.parentElement;
    var imgSrc = product.getElementsByClassName('product-img')[0].src;
    var productTitle = product.getElementsByClassName('title')[0].innerText;
    var price = product.getElementsByClassName('productItemPriceNew')[0].innerText;
    console.log(imgSrc,productTitle,price);
    addToShoppingCart(imgSrc,productTitle,price);
    updateCartTotal()
}

function addToShoppingCart(imgSrc,productTitle,price){
    var cartItem = document.querySelector('.cart-item');
    var cartRow = document.createElement('div');
    cartRow.classList.add("cart-row");
    var cartRowContent = `
        <div class="cart-item-info">
            <img class="cart-item-image" src="${imgSrc}" alt="">
            <p class="cart-item-title">${productTitle}</p>
            <p class="cart-price">${price}</p>
        </div>
        
        <div class="cart-quantity-box">
            <input class="cart-input-number" type="number" value="1" min="1" />
        </div>
        <div class="cart-remove-btn">
            <button class="btn btn-danger remove-btn">Remove</button>
        </div>`;
    cartRow.innerHTML = cartRowContent;
    cartItem.append(cartRow);
    var removeButtons = $('.remove-btn');
    for(let index = 0; index < removeButtons.length; index++){
        var button = removeButtons[index];
        button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = $('.cart-input-number');
    for(let index = 0; index < quantityInputs.length; index++){
        var input = quantityInputs[index];
        input.addEventListener('change', changedInput);
    }
    countCartItems()
}
function countCartItems() {
    var badge = document.querySelector('#my-badge');
    var cartItemNumber = document.querySelector('.cart-item').childElementCount;
    console.log(badge,cartItemNumber);
    badge.innerText = cartItemNumber;
}
function changedInput(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    };
    updateCartTotal();
};
function removeCartItem(event){
    var clickedButton = event.target;
    clickedButton.parentElement.parentElement.remove();
    
    updateCartTotal()
    countCartItems()
}
function updateCartTotal() {
    var cartItemContainer = document.querySelector('.cart-item');
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (let index = 0; index < cartRows.length; index++) {
        var cartRow = cartRows[index];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-input-number")[0];
        var price = parseFloat(priceElement.innerText.replace(",", ""));
        var quantity = parseInt(quantityElement.value);
        console.log(price,quantity);
        total = total + (price * quantity);
    };
    total = Math.round(total * 100) / 100;
    total = numberWithCommas(total);
    var totalPrice = document.querySelector(".total-modal-price");
    totalPrice.innerText = total + 'đ';
};
function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

