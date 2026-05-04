/* =======================================
    LuxuryTrading - JavaScript (Optimized Version)
    ======================================= */

// Multi-language translations object
const translations = {};
let currentLang = 'en';

// Currency system with exchange rates
const currencies = {
    'USD': { symbol: '$', rate: 1, name: 'US Dollar' },
    'CNY': { symbol: '��', rate: 7.2, name: 'Chinese Yuan' },
    'EUR': { symbol: '�', rate: 0.92, name: 'Euro' },
    'GBP': { symbol: '��', rate: 0.79, name: 'British Pound' },
    'JPY': { symbol: '��', rate: 149, name: 'Japanese Yen' }
};
let currentCurrency = 'USD';

// Pagination settings
const PRODUCTS_PER_PAGE = 20;
let currentPage = 1;
let allProducts = { 'clothing': [], 'fragrance': [] };
let filteredProducts = [];
let currentCategory = 'all';

// Format price with currency
function formatPrice(usdPrice, currencyCode = currentCurrency) {
    const currency = currencies[currencyCode] || currencies['USD'];
    const convertedPrice = usdPrice * currency.rate;
    
    if (currencyCode === 'JPY') {
        return currency.symbol + Math.round(convertedPrice).toLocaleString();
    }
    return currency.symbol + convertedPrice.toFixed(2);
}

// Get currency selector HTML
function getCurrencySelector() {
    return currencies.map(c => 
        `<option value="${c.code}">${c.code} - ${c.name}</option>`
    ).join('');
}

// Available languages
const languages = [
    { code: 'en', name: 'English', flag: '??????' },
    { code: 'zh', name: '����', flag: '????' },
    { code: 'de', name: 'Deutsch', flag: '????' },
    { code: 'fr', name: 'Fran?ais', flag: '????' },
    { code: 'es', name: 'Espa?ol', flag: '????' },
    { code: 'ar', name: '???????', flag: '????' }
];

// Translation data (embedded for reliability)
const translationsData = {
    'en': {
        meta: { langCode: 'en', langName: 'English', dir: 'ltr' },
        nav: { home: 'Home', clothing: 'Clothing', fragrance: 'Fragrance', about: 'About', signIn: 'Sign In', createAccount: 'Create Account', profile: 'My Profile', myOrders: 'My Orders', addresses: 'Addresses', accountSettings: 'Account Settings', signOut: 'Sign Out' },
        hero: { subtitle: 'Luxury Trading', title: 'Luxury Collections', desc: 'Curated luxury products', ctaClothing: 'Explore Clothing', ctaFragrance: 'Discover Fragrance', scroll: 'Scroll Down' },
        categories: { subtitle: 'Collections', title: 'Curated Selections', clothing: 'Fashion', clothingDesc: 'Exquisite', fragrance: 'Fragrance', fragranceDesc: 'Premium', explore: 'Explore More ��' },
        category: { all: 'All', shoes: 'Shoes', bags: 'Bags', perfume: 'Perfume', sunglasses: 'Sunglasses', watches: 'Watches' },
        products: { featured: 'Featured', clothingTitle: 'Fashion', fragranceTitle: 'Fragrances', viewAllClothing: 'View All', viewAllFragrance: 'View All', quickView: 'Quick View', addToCart: 'Add to Cart' },
        about: { subtitle: 'Our Story', title: 'About Luxury Trading', text1: 'Luxury Trading curates the finest products.', text2: 'Every product is carefully selected.', years: 'Years Experience', brands: 'Brand Partnerships', customers: 'Customers' },
        newsletter: { title: 'Subscribe', desc: 'Get latest updates', placeholder: 'Enter your email', button: 'Subscribe' },
        footer: { desc: 'Curating luxury from around the world.', quickLinks: 'Quick Links', service: 'Customer Service', contact: 'Contact Us', shipping: 'Shipping', returns: 'Returns', privacy: 'Privacy', contactUs: 'Contact', globalSourcing: 'Global Sourcing', email: 'kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'All rights reserved.' }
    },
    'zh': {
        meta: { langCode: 'zh', langName: '����', dir: 'ltr' },
        nav: { home: '��ҳ', clothing: '��װ', fragrance: '��ˮ', about: '��������', signIn: '��¼', createAccount: '�����˻�', profile: '������Ϣ', myOrders: '�ҵĶ���', addresses: '�ջ���ַ', accountSettings: '�˻�����', signOut: '�˳���¼' },
        hero: { subtitle: '�ݻ�ó��', title: '�ݻ�ϵ��', desc: '��ѡ�ݻ���Ʒ', ctaClothing: '̽����װ', ctaFragrance: '������ˮ', scroll: '���¹���' },
        categories: { subtitle: 'ϵ��', title: '��ѡϵ��', clothing: 'ʱװ', clothingDesc: '����', fragrance: '���', fragranceDesc: '����', explore: '̽������ ��' },
        category: { all: 'ȫ��', shoes: 'Ь��', bags: '���', perfume: '��ˮ', sunglasses: 'ī��', watches: '���' },
        products: { featured: '��ѡ', clothingTitle: '��װ', fragranceTitle: '��ˮ', viewAllClothing: '�鿴ȫ��', viewAllFragrance: '�鿴ȫ��', quickView: '���ٲ鿴', addToCart: '���빺�ﳵ' },
        about: { subtitle: 'Ʒ�ƹ���', title: '�����ݻ�ó��', text1: '��������ѡȫ�������ʲ�Ʒ��', text2: 'ÿһ����Ʒ������������ѡ��', years: '��ɹ�����', brands: 'Ʒ�ƺ���', customers: '��ʵ�ͻ�' },
        newsletter: { title: '������Ѷ', desc: '��ȡ���²�Ʒ��Ϣ', placeholder: '������������', button: '����' },
        footer: { desc: '��ѡȫ���ݻ���Ʒ��', quickLinks: '��������', service: '�ͻ�����', contact: '��ϵ����', shipping: '����˵��', returns: '�˻�����', privacy: '��˽����', contactUs: '��ϵ��ʽ', globalSourcing: 'ȫ��ɹ�', email: '����: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: '��Ȩ���С�' }
    }
};

// Initialize translations
function initTranslations() {
    // Simplified for brevity - add other languages as needed
    for (const [lang, data] of Object.entries(translationsData)) {
        translations[lang] = data;
    }
}

// Load products from JSON (lazy loading with pagination)
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        const data = await response.json();
        allProducts = data;
        
        // Combine all products for "All" category
        filteredProducts = [
            ...(allProducts.clothing || []),
            ...(allProducts.fragrance || [])
        ];
        
        console.log(`Loaded ${filteredProducts.length} products`);
        
        // Initial render
        renderProducts();
        setupPagination();
        
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Render products with pagination
function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(start, end);
    
    container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Setup lazy loading for images
    setupLazyLoading();
}

// Create product card HTML
function createProductCard(product) {
    const imageUrl = (product.images && product.images[0]) || 'images/placeholder.jpg';
    const price = formatPrice(product.price);
    
    return `
        <div class="product-card" data-id="${product.id}">
            <img class="product-image lazy" data-src="${imageUrl}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-brand">${product.brand || ''}</p>
                <p class="product-price">${price}</p>
                <button class="btn-quick-view" onclick="quickView('${product.id}')">Quick View</button>
            </div>
        </div>
    `;
}

// Setup lazy loading using Intersection Observer
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.classList.remove('lazy');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => observer.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}

// Setup pagination controls
function setupPagination() {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    let paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'pagination';
        paginationContainer.className = 'pagination';
        document.getElementById('productsGrid').after(paginationContainer);
    }
    if (!paginationContainer) return;
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    
    // Next button
    paginationHTML += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    setupPagination();
    
    // Scroll to top of products section
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

// Filter products by category
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1; // Reset to first page
    
    if (category === 'all') {
        filteredProducts = [
            ...(allProducts.clothing || []),
            ...(allProducts.fragrance || [])
        ];
    } else if (allProducts[category]) {
        filteredProducts = allProducts[category];
    } else {
        filteredProducts = [];
    }
    
    renderProducts();
    setupPagination();
}

// Quick view modal
function quickView(productId) {
    const product = filteredProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Show modal (simplified)
    alert(`Product: ${product.name}\nPrice: ${formatPrice(product.price)}`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTranslations();
    loadProducts();
});


