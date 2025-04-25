// Get all heart icons
const heartIcons = document.querySelectorAll('.fa-heart');

// Initialize favorites array from localStorage or empty array
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to add/remove from favorites
function toggleFavorite(product) {
    const index = favorites.findIndex(item => item.id === product.id);
    
    if (index === -1) {
        // Add to favorites
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.classList.add('active');
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.classList.remove('active');
    }
}

// Add click event to all heart icons
heartIcons.forEach(heart => {
    heart.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product info from closest card
        const card = this.closest('.card');
        if (card) {
            const product = {
                id: card.dataset.id || Math.random().toString(36).substr(2, 9),
                name: card.querySelector('.card-body a').textContent,
                price: card.querySelector('.price').textContent,
                image: card.querySelector('.card-img-top').src
            };
            
            toggleFavorite.call(this, product);
        }
    });
});

// Function to display favorites on fav.html page
function displayFavorites() {
    const favoritesContainer = document.querySelector('.favourite .table tbody');
    if (!favoritesContainer) return;

    favoritesContainer.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = `
            <tr>
                <td colspan="5" class="text-center">No favorite products yet</td>
            </tr>
        `;
        return;
    }
    
    favorites.forEach(product => {
        const row = document.createElement('tr');
        row.className = 'parant';
        row.innerHTML = `
            <td><img src="${product.image}" alt="" /></td>
            <td><span>${product.name}</span></td>
            <td><span>${product.price}</span></td>
            <td><div class="btn">add to cart</div></td>
            <td class="Remove" id="remove" style="color: red;">Remove</td>
        `;
        favoritesContainer.appendChild(row);
    });

    // Add remove functionality to new rows
    const removeButtons = document.querySelectorAll('.Remove');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const productName = row.querySelector('td:nth-child(2) span').textContent;
            
            // Remove from favorites array
            favorites = favorites.filter(item => item.name !== productName);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            
            // Remove row from table
            row.remove();

            // If no more favorites, show message
            if (favorites.length === 0) {
                favoritesContainer.innerHTML = `
                    <tr>
                        <td colspan="5" class="text-center">No favorite products yet</td>
                    </tr>
                `;
            }
        });
    });
}

// Call displayFavorites when on fav.html page
if (window.location.pathname.includes('fav.html')) {
    displayFavorites();
}

// Update heart icons on page load to show active state
function updateHeartIcons() {
    heartIcons.forEach(heart => {
        const card = heart.closest('.card');
        if (card) {
            const productName = card.querySelector('.card-body a').textContent;
            const isFavorite = favorites.some(item => item.name === productName);
            if (isFavorite) {
                heart.classList.add('active');
            }
        }
    });
}

// Call updateHeartIcons when page loads
document.addEventListener('DOMContentLoaded', updateHeartIcons); 