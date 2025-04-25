// Function to fetch and display products
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        
        // Store all products in localStorage for later use
        localStorage.setItem('allProducts', JSON.stringify(data.products));
        
        displayProducts(data.products);
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Function to display products
function displayProducts(products) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (!swiperWrapper) {
        console.error('Swiper wrapper not found');
        return;
    }

    // Clear existing content
    swiperWrapper.innerHTML = '';

    // Create slides with 8 products each
    for (let i = 0; i < products.length; i += 8) {
        const slideProducts = products.slice(i, i + 8);
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const row = document.createElement('div');
        row.className = 'row m-0 m-0 pt-5';

        slideProducts.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-lg-3 col-sm-4 col';
            col.innerHTML = `
                <div class="card" data-id="${product.id}">
                    <img class="card-img-top" src="${product.image}" alt="${product.name}" />
                    <div class="card-body">
                        <div class="price">
                            ${product.price}
                            <del style="padding: 0 20px; color: #000;">${product.originalPrice}</del>
                        </div>
                        <a href="#" class="btn">See ${product.name}</a>
                    </div>
                    <div class="card_option">
                        <span><a href=""><i class="fa-solid fa-heart"></i></a></span>
                        <span><a href=""><i class="fa-solid fa-basket-shopping"></i></a></span>
                        <span><a href=""><i class="fa-regular fa-user"></i></a></span>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        slide.appendChild(row);
        swiperWrapper.appendChild(slide);
    }

    // Initialize Swiper after adding products
    new Swiper('.mySwiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Add click event to all See buttons
    const seeButtons = document.querySelectorAll('.card .btn');
    seeButtons.forEach(button => {
        button.addEventListener('click', handleSeeButtonClick);
    });
}

// Function to handle See button click
function handleSeeButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const card = this.closest('.card');
    if (!card) return;

    const productId = card.dataset.id;
    const product = findProductById(productId);
    if (!product) return;

    saveProductToStorage(product);
    window.location.href = 'prouduct.html';
}

// Function to find product by ID
function findProductById(id) {
    const products = JSON.parse(localStorage.getItem('allProducts')) || [];
    return products.find(product => product.id === id);
}

// Function to save product to localStorage
function saveProductToStorage(product) {
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    selectedProducts.push(product);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, loading products...');
    loadProducts();
}); 