/* ========================================
    Luxury Trading - JavaScript (Optimized & Fixed)
    ======================================== */

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
        `<option value="${c.code}" ${c.code === currentCurrency ? 'selected' : ''}>${c.code} - ${c.name}</option>`
    ).join('');
}

// Available languages
const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

// Translation data
const translationsData = {
    'en': {
        meta: { langCode: 'en', langName: 'English', dir: 'ltr' },
        nav: { home: 'Home', clothing: 'Clothing', fragrance: 'Fragrance', about: 'About', signIn: 'Sign In', createAccount: 'Create Account', profile: 'My Profile', myOrders: 'My Orders', addresses: 'Addresses', accountSettings: 'Account Settings', signOut: 'Sign Out' },
        hero: { subtitle: 'Luxury Trading', title: 'Luxury Collections', desc: 'Curated luxury products', ctaClothing: 'Explore Clothing', ctaFragrance: 'Discover Fragrance', scroll: 'Scroll Down' },
        category: { all: 'All', shoes: 'Shoes', bags: 'Bags', perfume: 'Perfume', sunglasses: 'Sunglasses', watches: 'Watches' },
        products: { featured: 'Featured', clothingTitle: 'Fashion', fragranceTitle: 'Fragrances', viewAllClothing: 'View All', viewAllFragrance: 'View All', quickView: 'Quick View', addToCart: 'Add to Cart' },
        about: { subtitle: 'Our Story', title: 'About Luxury Trading', text1: 'Luxury Trading curates the finest products.', text2: 'Every product is carefully selected.', years: 'Years Experience', brands: 'Brand Partnerships', customers: 'Customers' },
        newsletter: { title: 'Subscribe', desc: 'Get latest updates', placeholder: 'Enter your email', button: 'Subscribe' },
        footer: { desc: 'Curating luxury from around the world.', quickLinks: 'Quick Links', service: 'Customer Service', contact: 'Contact Us', shipping: 'Shipping', returns: 'Returns', privacy: 'Privacy', contactUs: 'Contact', globalSourcing: 'Global Sourcing', email: 'kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'All rights reserved.' },
        login: { email: 'Email', password: 'Password', submit: 'Login', toggleToRegister: 'Don\'t have an account? Register' },
        register: { name: 'Name', email: 'Email', password: 'Password', submit: 'Register' },
        search: { placeholder: 'Search products...' },
        cart: { title: 'Shopping Cart', empty: 'Your cart is empty', total: 'Total' }
    },
    'zh': {
        meta: { langCode: 'zh', langName: '中文', dir: 'ltr' },
        nav: { home: '首页', clothing: '服装', fragrance: '香水', about: '关于我们', signIn: '登录', createAccount: '创建账户', profile: '我的资料', myOrders: '我的订单', addresses: '地址管理', accountSettings: '账户设置', signOut: '退出登录' },
        hero: { subtitle: '奢侈品贸易', title: '奢华典藏', desc: '精选奢侈品', ctaClothing: '探索服装', ctaFragrance: '发现香水', scroll: '向下滚动' },
        category: { all: '全部', shoes: '鞋类', bags: '包袋', perfume: '香水', sunglasses: '太阳镜', watches: '手表' },
        products: { featured: '精选', clothingTitle: '时尚', fragranceTitle: '香水', viewAllClothing: '查看全部', viewAllFragrance: '查看全部', quickView: '快速查看', addToCart: '加入购物车' },
        about: { subtitle: '我们的故事', title: '关于 Luxury Trading', text1: 'Luxury Trading 精选最优质的产品。', text2: '每一件产品都经过精心挑选。', years: '年经验', brands: '品牌合作', customers: '客户' },
        newsletter: { title: '订阅', desc: '获取最新更新', placeholder: '输入您的邮箱', button: '订阅' },
        footer: { desc: '从世界各地精选奢侈品。', quickLinks: '快速链接', service: '客户服务', contact: '联系我们', shipping: '配送', returns: '退货', privacy: '隐私', contactUs: '联系我们', globalSourcing: '全球采购', email: 'kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: '保留所有权利。' },
        login: { email: '邮箱', password: '密码', submit: '登录', toggleToRegister: '没有账号？点击注册' },
        register: { name: '姓名', email: '邮箱', password: '密码', submit: '注册' },
        search: { placeholder: '搜索产品...' },
        cart: { title: '购物车', empty: '购物车是空的', total: '总计' }
    }
};

// Initialize translations
Object.keys(translationsData).forEach(lang => {
    translations[lang] = translationsData[lang];
});

// Load language
function loadLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, falling back to English`);
        lang = 'en';
    }
    
    currentLang = lang;
    const trans = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = trans;
        for (const key of keys) {
            value = value[key];
            if (!value) break;
        }
        
        if (value) {
            if (el.tagName === 'INPUT' && el.getAttribute('data-i18n-placeholder')) {
                el.placeholder = value;
            } else {
                el.innerHTML = value;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = trans.meta.langCode;
    document.documentElement.dir = trans.meta.dir;
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Change currency
function changeCurrency(currencyCode) {
    currentCurrency = currencyCode;
    localStorage.setItem('preferredCurrency', currencyCode);
    
    // Re-render products with new currency
    if (typeof renderFeaturedProducts === 'function') {
        renderFeaturedProducts();
    }
}

// Render featured products
async function renderFeaturedProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    try {
        const response = await fetch('data/products.json?_=' + Date.now());
        const data = await response.json();
        
        const allProducts = [...(data.clothing || []), ...(data.fragrance || [])];
        const featured = allProducts.filter(p => p.featured).slice(0, 10);
        
        grid.innerHTML = featured.map(product => `
            <div class="product-card visible" data-id="${product.id}" data-type="${product.id.startsWith('c') ? 'clothing' : 'fragrance'}" onclick="openProductModal('${product.id}', '${product.id.startsWith('c') ? 'clothing' : 'fragrance'}')">
                <div class="product-image">
                    <img src="${product.images && product.images[0] ? product.images[0] : 'images/placeholder.jpg'}" 
                         alt="${product.nameEn || product.name}" 
                         class="product-img-simple" 
                         loading="lazy"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWViIi8+PC9zdmc+'">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category || 'Uncategorized'}</span>
                    <h3 class="product-name">${product.nameEn || product.name}</h3>
                    <span class="product-name-en">${product.nameEn || product.name}</span>
                    <div class="product-price-display">${formatPrice(product.price)}</div>
                </div>
            </div>
        `).join('');
        
        console.log('Rendered', featured.length, 'products');
    } catch (error) {
        console.error('Error loading products:', error);
        grid.innerHTML = '<p style="text-align:center;color:var(--color-text-light);grid-column:1/-1;">Failed to load products. Please try again later.</p>';
    }
}

// Open product modal
function openProductModal(productId, type) {
    console.log('Opening product:', productId, type);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    // Fetch product details
    fetch('data/products.json')
        .then(res => res.json())
        .then(data => {
            const products = type === 'clothing' ? data.clothing : data.fragrance;
            const product = products ? products.find(p => p.id === productId) : null;
            
            if (product) {
                modalBody.innerHTML = `
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
                        <div>
                            <img src="${product.images && product.images[0] ? product.images[0] : 'images/placeholder.jpg'}" 
                                 alt="${product.nameEn || product.name}" 
                                 style="width:100%;border-radius:8px;">
                        </div>
                        <div>
                            <h2 style="font-family:var(--font-display);font-size:32px;color:var(--color-white);margin-bottom:16px;">${product.nameEn || product.name}</h2>
                            <p style="color:var(--color-accent);font-size:14px;letter-spacing:2px;text-transform:uppercase;margin-bottom:20px;">${product.category}</p>
                            <p style="color:var(--color-text-light);line-height:1.8;margin-bottom:24px;">${product.description || 'No description available.'}</p>
                            <div style="font-size:24px;color:var(--color-accent);font-weight:600;margin-bottom:30px;">${formatPrice(product.price)}</div>
                            <button onclick="addToCart('${product.id}', '${product.nameEn || product.name}', ${product.price})" 
                                    style="width:100%;padding:14px;background:var(--color-accent);color:var(--color-primary);border:none;border-radius:4px;font-size:14px;font-weight:600;letter-spacing:2px;text-transform:uppercase;cursor:pointer;">
                                ${translations[currentLang]?.products?.addToCart || 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                `;
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('active'), 10);
            }
        })
        .catch(err => console.error('Error loading product details:', err));
}

// Add to cart (placeholder)
function addToCart(id, name, price) {
    console.log('Adding to cart:', id, name, price);
    showNotification(translations[currentLang]?.products?.addToCart || 'Added to cart!', 'success');
}

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar && overlay) {
        const isOpen = sidebar.classList.contains('open');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        
        // Prevent body scroll when cart is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Handle newsletter submit
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput?.value;
    
    if (email && isValidEmail(email)) {
        showNotification(translations[currentLang]?.newsletter?.button || 'Thank you for subscribing!', 'success');
        emailInput.value = '';
        
        // Here you would typically send to your backend
        console.log('Newsletter subscription:', email);
    } else {
        showNotification('Please enter a valid email address', 'error');
    }
    
    return false;
}

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Luxury Trading initialized');
    
    // Load saved preferences
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
    
    loadLanguage(savedLang);
    currentCurrency = savedCurrency;
    
    const currencySelector = document.getElementById('currencySelector');
    if (currencySelector) {
        currencySelector.value = savedCurrency;
    }
    
    // Render products
    renderFeaturedProducts();
    
    // Initialize event listeners
    initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const overlay = document.getElementById('searchOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                setTimeout(() => overlay.classList.add('active'), 10);
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.focus();
            }
        });
    }
    
    // Search close
    const searchClose = document.getElementById('searchClose');
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            const overlay = document.getElementById('searchOverlay');
            if (overlay) {
                overlay.classList.remove('active');
                setTimeout(() => overlay.style.display = 'none', 300);
            }
        });
    }
    
    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    // Cart close
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', toggleCart);
    }
    
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }
    
    // Modal close
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.classList.remove('active');
                setTimeout(() => modal.style.display = 'none', 300);
            }
        });
    }
    
    // Mobile menu button - FIXED
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            const nav = document.getElementById('nav');
            if (nav) {
                nav.classList.toggle('active');
            }
        });
    }
    
    // Language switcher
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) {
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('langDropdown');
            if (dropdown) {
                dropdown.parentElement.classList.toggle('open');
            }
        });
    }
    
    // Language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            loadLanguage(lang);
            
            // Update active state
            document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Close dropdown
            const switcher = document.querySelector('.lang-switcher');
            if (switcher) switcher.classList.remove('open');
        });
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', function(e) {
        // Language dropdown
        const langSwitcher = document.querySelector('.lang-switcher');
        if (langSwitcher && !langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
        
        // User dropdown
        const userMenu = document.getElementById('userAccountMenu');
        if (userMenu && !userMenu.contains(e.target)) {
            userMenu.classList.remove('open');
        }
        
        // Mobile menu - close when clicking outside
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');
        if (mobileMenuBtn && nav && !mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products (placeholder)
            const category = this.getAttribute('data-category');
            console.log('Filter by category:', category);
            // Implement filtering logic here
        });
    });
}

// Export functions for use in inline scripts
window.loadLanguage = loadLanguage;
window.changeCurrency = changeCurrency;
window.formatPrice = formatPrice;
window.showNotification = showNotification;
window.toggleCart = toggleCart;
window.openProductModal = openProductModal;
window.handleNewsletterSubmit = handleNewsletterSubmit;
window.toggleUserDropdown = function(event) {
    event.stopPropagation();
    const menu = document.getElementById('userAccountMenu');
    if (menu) {
        menu.classList.toggle('open');
        const trigger = menu.querySelector('.user-account-trigger');
        if (trigger) {
            trigger.setAttribute('aria-expanded', menu.classList.contains('open'));
        }
    }
};

window.closeUserDropdown = function() {
    const menu = document.getElementById('userAccountMenu');
    if (menu) {
        menu.classList.remove('open');
        const trigger = menu.querySelector('.user-account-trigger');
        if (trigger) {
            trigger.setAttribute('aria-expanded', false);
        }
    }
};

// Firebase configuration - Fixed
// Note: This should be in a separate module script tag in HTML
// The Firebase code from the HTML file should be moved to this file
