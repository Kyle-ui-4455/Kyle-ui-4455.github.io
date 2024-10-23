let cart = []; // Initialize an empty cart array

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', () => {
        // Get the price, remove commas, and convert it to a number
        let price = Number(button.getAttribute('data-price').replace(/,/g, ''));
        let name = button.getAttribute('data-name');

        // Add the item to the cart
        cart.push({ name, price });

        console.log(cart); // Check the updated cart in the console
        alert(`${name} has been added to your cart.`);
    });
});

// Checkout button event listener
document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (cart.length > 0) {
        // Calculate subtotal by summing up item prices
        let subtotal = cart.reduce((acc, item) => acc + item.price, 0);

        // Calculate tax (10%)
        let tax = subtotal * 0.1;  // Assuming 10% tax

        // Calculate total
        let total = subtotal + tax;

        // Format subtotal, tax, and total with commas
        let formattedSubtotal = subtotal.toLocaleString();
        let formattedTax = tax.toLocaleString();
        let formattedTotal = total.toLocaleString();

        // Store cart and formatted values in localStorage to use in the invoice page
        localStorage.setItem('cartItems', JSON.stringify(cart));
        localStorage.setItem('subtotal', formattedSubtotal);
        localStorage.setItem('tax', formattedTax);
        localStorage.setItem('total', formattedTotal);

        // Redirect to the invoice page
        window.location.href = "invoice.html";
    } else {
        alert('Your cart is empty! Please add products to the cart.');
    }
});
