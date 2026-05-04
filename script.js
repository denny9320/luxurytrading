/* =======================================
    LuxuryTrading - JavaScript (Optimized Version)
    ======================================= */

// Multi-language translations object
const translations = {};
let currentLang = 'en';

// Currency system with exchange rates
const currencies = {
    'USD': { symbol: '$', rate: 1, name: 'US Dollar' },
    'CNY': { symbol: '¥', rate: 7.2, name: 'Chinese Yuan' },
    'EUR': { symbol: '€', rate: 0.92, name: 'Euro' },
    'GBP': { symbol: '£', rate: 0.79, name: 'British Pound' },
    'JPY': { symbol: '¥', rate: 149, name: 'Japanese Yen' }
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
    { code: 'en', name: 'English', flag: '🇬🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

// Translation data (embedded for reliability)
const translationsData = {
    'en': {
        meta: { langCode: 'en', langName: 'English', dir: 'ltr' },
        nav: { home: 'Home', clothing: 'Clothing', fragrance: 'Fragrance', about: 'About', signIn: 'Sign In', createAccount: 'Create Account', profile: 'My Profile', myOrders: 'My Orders', addresses: 'Addresses', accountSettings: 'Account Settings', signOut: 'Sign Out' },
        hero: { subtitle: 'Luxury Trading', title: 'Luxury Collections', desc: 'Curated luxury products', ctaClothing: 'Explore Clothing', ctaFragrance: 'Discover Fragrance', scroll: 'Scroll Down' },
        categories: { subtitle: 'Collections', title: 'Curated Selections', clothing: 'Fashion', clothingDesc: 'Exquisite', fragrance: 'Fragrance', fragranceDesc: 'Premium', explore: 'Explore More →' },
        category: { all: 'All', shoes: 'Shoes', bags: 'Bags', perfume: 'Perfume', sunglasses: 'Sunglasses', watches: 'Watches' },
        products: { featured: 'Featured', clothingTitle: 'Fashion', fragranceTitle: 'Fragrances', viewAllClothing: 'View All', viewAllFragrance: 'View All', quickView: 'Quick View', addToCart: 'Add to Cart' },
        about: { subtitle: 'Our Story', title: 'About Luxury Trading', text1: 'Luxury Trading curates the finest products.', text2: 'Every product is carefully selected.', years: 'Years Experience', brands: 'Brand Partnerships', customers: 'Customers' },
        newsletter: { title: 'Subscribe', desc: 'Get latest updates', placeholder: 'Enter your email', button: 'Subscribe' },
        footer: { desc: 'Curating luxury from around the world.', quickLinks: 'Quick Links', service: 'Customer Service', contact: 'Contact Us', shipping: 'Shipping', returns: 'Returns', privacy: 'Privacy', contactUs: 'Contact', globalSourcing: 'Global Sourcing', email: 'kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'All rights reserved.' }
    },
    'zh': {
        meta: { langCode: 'zh', langName: '中文', dir: 'ltr' },
        nav: { home: '首页', clothing: '服装', fragrance: '香水', about: '关于我们', signIn: '登录', createAccount: '创建账户', profile: '个人信息', myOrders: '我的订单', addresses: '收货地址', accountSettings: '账户设置', signOut: '退出登录' },
        hero: { subtitle: '奢华贸易', title: '奢华系列', desc: '甄选奢华产品', ctaClothing: '探索服装', ctaFragrance: '发现香水', scroll: '向下滚动' },
        categories: { subtitle: '系列', title: '甄选系列', clothing: '时装', clothingDesc: '精致', fragrance: '香氛', fragranceDesc: '顶级', explore: '探索更多 →' },
        category: { all: '全部', shoes: '鞋履', bags: '箱包', perfume: '香水', sunglasses: '墨镜', watches: '腕表' },
        products: { featured: '精选', clothingTitle: '服装', fragranceTitle: '香水', viewAllClothing: '查看全部', viewAllFragrance: '查看全部', quickView: '快速查看', addToCart: '加入购物车' },
        about: { subtitle: '品牌故事', title: '关于奢华贸易', text1: '致力于甄选全球最优质产品。', text2: '每一件产品都经过精心挑选。', years: '年采购经验', brands: '品牌合作', customers: '忠实客户' },
        newsletter: { title: '订阅资讯', desc: '获取最新产品信息', placeholder: '输入您的邮箱', button: '订阅' },
        footer: { desc: '甄选全球奢华产品。', quickLinks: '快速链接', service: '客户服务', contact: '联系我们', shipping: '配送说明', returns: '退换政策', privacy: '隐私条款', contactUs: '联系方式', globalSourcing: '全球采购', email: '邮箱: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: '版权所有。' }
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
    const container = document.getElementById('products-container');
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
    const paginationContainer = document.getElementById('pagination');
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
    document.getElementById('products-container').scrollIntoView({ behavior: 'smooth' });
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
