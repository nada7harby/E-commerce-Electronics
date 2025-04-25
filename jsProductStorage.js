// Function to save product to localStorage
function saveProductToStorage(product) {
    console.log('Saving product:', product); // Debug log
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    selectedProducts.push(product);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}

// Function to display product on product.html
function displaySelectedProduct() {
    console.log('Displaying selected product'); // Debug log
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    if (selectedProducts.length === 0) {
        console.log('No products found in localStorage'); // Debug log
        return;
    }

    // Get the last selected product
    const product = selectedProducts[selectedProducts.length - 1];
    console.log('Product to display:', product); // Debug log

    // Update product information on the page
    const productImage = document.querySelector('.prouduct_infoation img');
    const productName = document.querySelector('.prouduct_info h1');
    const productPrice = document.querySelector('.prouduct_info h2');
    const productDescription = document.querySelector('.prouduct_info p');

    if (productImage) {
        productImage.src = product.image;
        console.log('Updated image:', product.image); // Debug log
    }
    if (productName) {
        productName.textContent = product.name;
        console.log('Updated name:', product.name); // Debug log
    }
    if (productPrice) {
        productPrice.innerHTML = `<del style="color: #000;">${product.originalPrice}</del>${product.price}`;
        console.log('Updated price:', product.price); // Debug log
    }
    if (productDescription) {
        productDescription.textContent = product.description || 'No description available';
        console.log('Updated description'); // Debug log
    }
}

// Function to handle See button click
function handleSeeButtonClick(e) {
    console.log('See button clicked'); // Debug log
    e.preventDefault();
    e.stopPropagation();

    const card = this.closest('.card');
    if (!card) {
        console.error('Could not find parent card'); // Debug log
        return;
    }

    const product = {
        id: card.dataset.id || Math.random().toString(36).substr(2, 9),
        name: this.textContent.trim(),
        price: card.querySelector('.price').textContent.trim(),
        originalPrice: card.querySelector('.price del')?.textContent.trim() || '',
        image: card.querySelector('.card-img-top').src,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint blanditiis possimus magnam aliquam, voluptatem enim facere nostrum vero, voluptas nihil accusamus.'
    };

    console.log('Product data:', product); // Debug log
    saveProductToStorage(product);
    window.location.href = 'prouduct.html';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded'); // Debug log
    
    // Add click event to all See buttons
    const seeButtons = document.querySelectorAll('.card .btn');
    console.log('Found See buttons:', seeButtons.length); // Debug log
    
    seeButtons.forEach(button => {
        button.style.cursor = 'pointer'; // Add pointer cursor
        button.addEventListener('click', handleSeeButtonClick);
    });

    // If on product page, display the selected product
    if (window.location.pathname.includes('prouduct.html')) {
        displaySelectedProduct();
    }
});

// Also try to initialize after a short delay to ensure all elements are loaded
setTimeout(() => {
    console.log('Delayed initialization'); // Debug log
    const seeButtons = document.querySelectorAll('.card .btn');
    console.log('Found See buttons in delayed init:', seeButtons.length); // Debug log
    
    seeButtons.forEach(button => {
        button.style.cursor = 'pointer';
        button.addEventListener('click', handleSeeButtonClick);
    });
}, 1000); 