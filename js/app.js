let currentCategory = 'all';
let currentSort = 'featured';
let searchQuery = '';
let debounceTimer;

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<span class="star">★</span>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">★</span>';
        }
    }
    return stars;
}

function formatPrice(price) {
    return '$' + price.toFixed(2);
}

function formatReviewCount(count) {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
}

function filterAndSortProducts() {
    let filtered = [...products];

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
    }

    switch (currentSort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
    }

    return filtered;
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const filtered = filterAndSortProducts();

    if (filtered.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <span class="product-badge">${product.category}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">${product.rating} (${formatReviewCount(product.reviewCount)})</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="view-btn">View Deal</button>
            </div>
        </div>
    `).join('');
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-image-container">
            <img src="${product.image}" alt="${product.name}" class="modal-image">
        </div>
        <div class="modal-details">
            <span class="modal-category">${product.category}</span>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-rating">
                <div class="modal-stars">${generateStars(product.rating)}</div>
                <span class="modal-rating-text">${product.rating} out of 5 (${formatReviewCount(product.reviewCount)} reviews)</span>
            </div>
            <div class="modal-price">${formatPrice(product.price)}</div>
            <p class="modal-description">${product.description}</p>
            <a href="${product.amazonUrl}" target="_blank" class="amazon-btn">
                <span>🛒</span> View on Amazon
            </a>
        </div>
    `;

    renderRelatedProducts(product.category, product.id);
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function renderRelatedProducts(category, currentId) {
    const related = products
        .filter(p => p.category === category && p.id !== currentId)
        .slice(0, 4);

    const grid = document.getElementById('relatedGrid');
    
    if (related.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); grid-column: 1/-1;">No related products found</p>';
        return;
    }

    grid.innerHTML = related.map(product => `
        <div class="related-card" onclick="openProductModal(${product.id}); closeModal();">
            <img src="${product.image}" alt="${product.name}" class="related-image" loading="lazy">
            <div class="related-info">
                <h4 class="related-name">${product.name}</h4>
                <div class="related-price">${formatPrice(product.price)}</div>
            </div>
        </div>
    `).join('');
}

function resetView() {
    currentCategory = 'all';
    currentSort = 'featured';
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.category-pill').forEach(pill => pill.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    document.getElementById('sortSelect').value = 'featured';
    document.getElementById('sectionTitle').textContent = 'All Products';
    renderProducts();
}

function initEventListeners() {
    document.getElementById('categories').addEventListener('click', (e) => {
        if (e.target.classList.contains('category-pill')) {
            document.querySelectorAll('.category-pill').forEach(pill => pill.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            document.getElementById('sectionTitle').textContent = 
                currentCategory === 'all' ? 'All Products' : currentCategory;
            renderProducts();
        }
    });

    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = e.target.value;
            renderProducts();
        }, 300);
    });

    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function init() {
    initEventListeners();
    renderProducts();
}

document.addEventListener('DOMContentLoaded', init);
