document.addEventListener("DOMContentLoaded", function() {
    const testimonialCards = document.querySelector(".testimonial-cards");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let scrollAmount = 0;
    const cardWidth = document.querySelector(".testimonial-card").offsetWidth;

    // Funzione per scorrere automaticamente le recensioni
    function autoScroll() {
        scrollAmount += cardWidth;
        if (scrollAmount > testimonialCards.scrollWidth - testimonialCards.clientWidth) {
            scrollAmount = 0;
        }
        testimonialCards.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    // Intervallo per lo scorrimento automatico ogni 5 secondi
    let scrollInterval = setInterval(autoScroll, 2000);

    // Gestione del click sui pulsanti di navigazione
    nextButton.addEventListener("click", function() {
        clearInterval(scrollInterval); // Interrompe lo scorrimento automatico al click
        autoScroll();
        scrollInterval = setInterval(autoScroll, 5000); // Riavvia lo scorrimento automatico
    });

    prevButton.addEventListener("click", function() {
        clearInterval(scrollInterval); // Interrompe lo scorrimento automatico al click
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) {
            scrollAmount = testimonialCards.scrollWidth - testimonialCards.clientWidth;
        }
        testimonialCards.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth"
        });
        scrollInterval = setInterval(autoScroll, 5000); // Riavvia lo scorrimento automatico
    });
});

function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice, image: productImage });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} è stato aggiunto al carrello a €${productPrice.toFixed(2)}`);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});


