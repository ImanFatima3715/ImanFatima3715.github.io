function showHome() {
    hideAllPages();
    document.getElementById('home-page').style.display = 'block';
}

function showAboutUs() {
    hideAllPages();
    document.getElementById('about-us-page').style.display = 'block';
    document.getElementById('about-us-page').style.backgroundImage = "url('about-us-bg.jpg')";
}

function showContact() {
    hideAllPages();
    document.getElementById('contact-us-page').style.display = 'block';
    document.getElementById('contact-us-page').style.backgroundImage = "url('about-us-bg.jpg')";
}

function showProducts() {
    hideAllPages();
    document.getElementById('products-page').style.display = 'block';
}

function showThankYou() {
    hideAllPages();
    document.getElementById('thank-you-page').style.display = 'block';
}

function showLogin() {
    hideAllPages();
    document.getElementById('login-container').style.display = 'block';
}

function showSignup() {
    hideAllPages();
    document.getElementById('signup-container').style.display = 'block';
}

function hideAllPages() {
    const pages = document.querySelectorAll('body > div');
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function handleLogin(event) {
    event.preventDefault();
    alert("Logged in successfully!");
}

function handleSignup(event) {
    event.preventDefault();
    alert("Signed up successfully!");
}

// Initialize the home page as the default page
document.addEventListener('DOMContentLoaded', () => {
    showHome();
});