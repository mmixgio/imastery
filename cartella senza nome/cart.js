document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartList = document.getElementById('cart-list');

    if (cart.length === 0) {
        cartList.innerHTML = '<li>Il carrello è vuoto.</li>';
    } else {
        cart.forEach((item, index) => {
            let li = document.createElement('li');

            let img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;

            let infoDiv = document.createElement('div');
            infoDiv.innerHTML = `<div>${item.name}</div><div>€${item.price.toFixed(2)}</div>`;

            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('cart-item-buttons');
            let buyButton = document.createElement('button');
            buyButton.innerText = 'Acquista';
            buyButton.onclick = () => buyItem(item);

            let removeButton = document.createElement('button');
            removeButton.innerText = 'Elimina';
            removeButton.onclick = () => removeFromCart(index);

            buttonsDiv.appendChild(buyButton);
            buttonsDiv.appendChild(removeButton);

            let infoContainer = document.createElement('div');
            infoContainer.classList.add('cart-item-info');
            infoContainer.appendChild(infoDiv);

            li.appendChild(img);
            li.appendChild(infoContainer);
            li.appendChild(buttonsDiv);
            cartList.appendChild(li);
        });
    }
});

function buyItem(item) {
    alert(`Hai acquistato: ${item.name} per €${item.price.toFixed(2)}`);
    // Logica per completare l'acquisto può essere aggiunta qui
    window.buyNow = function() {
        // Reindirizza alla pagina out.html
        window.location.href = 'out.html';
    };
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}
