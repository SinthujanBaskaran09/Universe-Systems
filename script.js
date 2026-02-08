// Initialize Lucide Icons
lucide.createIcons();

// Smooth Scroll for "Explore Menu"
function scrollToMenu() {
    document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
}

// Fade in Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-rustic-cream/90', 'backdrop-blur-md', 'shadow-sm');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-2');
    } else {
        navbar.classList.remove('bg-rustic-cream/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
        navbar.classList.add('py-4');
    }
});

// Function to handle ordering via WhatsApp
function orderItem(itemName, price = null) {
    const phoneNumber = "94774445456";
    let message = "";

    if (price) {
        message = `Hello Star One Hotel, I would like to order: ${itemName} (Price: ${price} LKR). Please confirm availability.`;
    } else {
        message = `Hello Star One Hotel, I would like to inquire about: ${itemName}. Please provide more details.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
}

// Function to call the number
function callNumber() {
    window.location.href = "tel:+94774445456";
}
