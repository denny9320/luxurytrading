/* ========================================
    TapingTrading - JavaScript
    ======================================== */

// Multi-language translations object
const translations = {};
let currentLang = 'en';

// Available languages
const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
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
        nav: { home: 'Home', clothing: 'Clothing', fragrance: 'Fragrance', about: 'About' },
        hero: { subtitle: 'Elegance Redefined', title: 'Discover Luxury', desc: 'Curated high-end fashion and premium fragrances', ctaClothing: 'Explore Clothing', ctaFragrance: 'Discover Fragrance', scroll: 'Scroll Down' },
        categories: { subtitle: 'Collections', title: 'Curated Selections', clothing: 'Fashion Collection', clothingDesc: 'Exquisite tailoring', fragrance: 'Fragrance Collection', fragranceDesc: 'Premium ingredients', explore: 'Explore More →' },
        products: { featured: 'Featured', clothingTitle: 'Featured Clothing', fragranceTitle: 'Signature Fragrances', viewAllClothing: 'View All', viewAllFragrance: 'View All', quickView: 'Quick View', addToCart: 'Add to Cart' },
        about: { subtitle: 'Our Story', title: 'About TapingTrading', text1: 'TapingTrading is dedicated to curating the finest high-end fashion.', text2: 'Every product is carefully selected.', years: 'Years of Experience', brands: 'Brand Partnerships', customers: 'Loyal Customers' },
        newsletter: { title: 'Subscribe', desc: 'Get latest updates', placeholder: 'Enter your email', button: 'Subscribe' },
        footer: { desc: 'Curating luxury fashion from around the world.', quickLinks: 'Quick Links', service: 'Customer Service', contact: 'Contact Us', shipping: 'Shipping', returns: 'Returns', privacy: 'Privacy', contactUs: 'Contact', globalSourcing: 'Global sourcing', copyright: 'All rights reserved.' },
        cart: { title: 'Shopping Cart', empty: 'Your cart is empty', total: 'Total', checkout: 'Checkout', addedToCart: 'added to cart' },
        search: { placeholder: 'Search products...', noResults: 'No products found' },
        notifications: { subscribeSuccess: 'Thank you!', invalidEmail: 'Invalid email', cartAdded: 'added to cart' }
    },
    'zh': {
        meta: { langCode: 'zh', langName: '中文', dir: 'ltr' },
        nav: { home: '首页', clothing: '服装', fragrance: '香水', about: '关于我们' },
        hero: { subtitle: '优雅重新定义', title: '探索奢华', desc: '精选高端时装与香氛', ctaClothing: '探索服装', ctaFragrance: '发现香水', scroll: '向下滚动' },
        categories: { subtitle: '系列', title: '精选系列', clothing: '时装系列', clothingDesc: '精致剪裁', fragrance: '香氛系列', fragranceDesc: '顶级香料', explore: '探索更多 →' },
        products: { featured: '精选', clothingTitle: '精选服装', fragranceTitle: '甄选香水', viewAllClothing: '查看全部', viewAllFragrance: '查看全部', quickView: '快速查看', addToCart: '加入购物车' },
        about: { subtitle: '品牌故事', title: '关于 TapingTrading', text1: '致力于为您甄选全球最优质的高端产品。', text2: '每一件产品都经过精心挑选。', years: '年采购经验', brands: '品牌合作', customers: '忠实客户' },
        newsletter: { title: '订阅资讯', desc: '获取最新产品信息', placeholder: '输入您的邮箱', button: '订阅' },
        footer: { desc: '甄选全球高端时装与香氛。', quickLinks: '快速链接', service: '客户服务', contact: '联系我们', shipping: '配送说明', returns: '退换政策', privacy: '隐私条款', contactUs: '联系方式', globalSourcing: '全球采购', copyright: '版权所有。' },
        cart: { title: '购物车', empty: '购物车是空的', total: '总计', checkout: '立即结算', addedToCart: '已添加到购物车' },
        search: { placeholder: '搜索产品...', noResults: '未找到产品' },
        notifications: { subscribeSuccess: '感谢订阅！', invalidEmail: '请输入有效邮箱', cartAdded: '已添加' }
    },
    'de': {
        meta: { langCode: 'de', langName: 'Deutsch', dir: 'ltr' },
        nav: { home: 'Startseite', clothing: 'Kleidung', fragrance: 'Düfte', about: 'Über uns' },
        hero: { subtitle: 'Eleganz', title: 'Entdecken Sie Luxus', desc: 'Hochwertige Mode und Düfte', ctaClothing: 'Kleidung', ctaFragrance: 'Düfte', scroll: 'Scroll' },
        categories: { subtitle: 'Kollektionen', title: 'Auswahl', clothing: 'Mode', clothingDesc: 'Exquisit', fragrance: 'Düfte', fragranceDesc: 'Premium', explore: 'Mehr →' },
        products: { featured: 'Empfohlen', clothingTitle: 'Kleidung', fragranceTitle: 'Düfte', viewAllClothing: 'Alle', viewAllFragrance: 'Alle', quickView: 'Schnellansicht', addToCart: 'In den Warenkorb' },
        about: { subtitle: 'Geschichte', title: 'Über uns', text1: 'Wir kuratieren die feinste Mode.', text2: 'Jedes Produkt wird sorgfältig ausgewählt.', years: 'Jahre', brands: 'Marken', customers: 'Kunden' },
        newsletter: { title: 'Newsletter', desc: 'Updates erhalten', placeholder: 'Email', button: 'Abonnieren' },
        footer: { desc: 'Luxusmode aus aller Welt.', quickLinks: 'Links', service: 'Service', contact: 'Kontakt', shipping: 'Versand', returns: 'Retouren', privacy: 'Datenschutz', contactUs: 'Kontakt', globalSourcing: 'Global', copyright: 'Rechte vorbehalten.' },
        cart: { title: 'Warenkorb', empty: 'Leer', total: 'Gesamt', checkout: 'Kasse', addedToCart: 'hinzugefügt' },
        search: { placeholder: 'Suchen...', noResults: 'Keine Ergebnisse' },
        notifications: { subscribeSuccess: 'Danke!', invalidEmail: 'Ungültige Email', cartAdded: 'hinzugefügt' }
    },
    'fr': {
        meta: { langCode: 'fr', langName: 'Français', dir: 'ltr' },
        nav: { home: 'Accueil', clothing: 'Vêtements', fragrance: 'Parfums', about: 'À propos' },
        hero: { subtitle: 'Élégance', title: 'Découvrez le luxe', desc: 'Mode et parfums premium', ctaClothing: 'Vêtements', ctaFragrance: 'Parfums', scroll: 'Défiler' },
        categories: { subtitle: 'Collections', title: 'Sélection', clothing: 'Mode', clothingDesc: 'Exquise', fragrance: 'Parfums', fragranceDesc: 'Premium', explore: 'Explorer →' },
        products: { featured: 'En vedette', clothingTitle: 'Vêtements', fragranceTitle: 'Parfums', viewAllClothing: 'Tous', viewAllFragrance: 'Tous', quickView: 'Aperçu', addToCart: 'Ajouter au panier' },
        about: { subtitle: 'Notre histoire', title: 'À propos', text1: 'Nous curons les meilleurs produits.', text2: 'Chaque produit est soigneusement choisi.', years: 'Ans', brands: 'Marques', customers: 'Clients' },
        newsletter: { title: 'Newsletter', desc: 'Recevez les mises à jour', placeholder: 'Email', button: "S'abonner" },
        footer: { desc: 'Mode luxe du monde entier.', quickLinks: 'Liens', service: 'Service', contact: 'Contact', shipping: 'Livraison', returns: 'Retours', privacy: 'Confidentialité', contactUs: 'Contact', globalSourcing: 'Mondial', copyright: 'Droits réservés.' },
        cart: { title: 'Panier', empty: 'Vide', total: 'Total', checkout: 'Commander', addedToCart: 'ajouté' },
        search: { placeholder: 'Rechercher...', noResults: 'Aucun résultat' },
        notifications: { subscribeSuccess: 'Merci!', invalidEmail: 'Email invalide', cartAdded: 'ajouté' }
    },
    'es': {
        meta: { langCode: 'es', langName: 'Español', dir: 'ltr' },
        nav: { home: 'Inicio', clothing: 'Ropa', fragrance: 'Fragancias', about: 'Nosotros' },
        hero: { subtitle: 'Elegancia', title: 'Descubre el lujo', desc: 'Moda y fragancias premium', ctaClothing: 'Ropa', ctaFragrance: 'Fragancias', scroll: 'Desplazar' },
        categories: { subtitle: 'Colecciones', title: 'Selección', clothing: 'Moda', clothingDesc: 'Exquisita', fragrance: 'Fragancias', fragranceDesc: 'Premium', explore: 'Explorar →' },
        products: { featured: 'Destacados', clothingTitle: 'Ropa', fragranceTitle: 'Fragancias', viewAllClothing: 'Ver todos', viewAllFragrance: 'Ver todos', quickView: 'Vista rápida', addToCart: 'Añadir al carrito' },
        about: { subtitle: 'Nuestra historia', title: 'Sobre nosotros', text1: 'Curamos los mejores productos.', text2: 'Cada producto se selecciona cuidadosamente.', years: 'Años', brands: 'Marcas', customers: 'Clientes' },
        newsletter: { title: 'Newsletter', desc: 'Recibe actualizaciones', placeholder: 'Email', button: 'Suscribirse' },
        footer: { desc: 'Moda de lujo de todo el mundo.', quickLinks: 'Enlaces', service: 'Servicio', contact: 'Contacto', shipping: 'Envío', returns: 'Devoluciones', privacy: 'Privacidad', contactUs: 'Contacto', globalSourcing: 'Global', copyright: 'Derechos reservados.' },
        cart: { title: 'Carrito', empty: 'Vacío', total: 'Total', checkout: 'Finalizar', addedToCart: 'añadido' },
        search: { placeholder: 'Buscar...', noResults: 'Sin resultados' },
        notifications: { subscribeSuccess: '¡Gracias!', invalidEmail: 'Email inválido', cartAdded: 'añadido' }
    },
    'ar': {
        meta: { langCode: 'ar', langName: 'العربية', dir: 'rtl' },
        nav: { home: 'الرئيسية', clothing: 'الأزياء', fragrance: 'العطور', about: 'من نحن' },
        hero: { subtitle: 'الأناقة', title: 'اكتشف الفخامة', desc: 'أزياء وعطور فاخرة', ctaClothing: 'الأزياء', ctaFragrance: 'العطور', scroll: 'انتقل للأسفل' },
        categories: { subtitle: 'المجموعات', title: 'اختيارات', clothing: 'الأزياء', clothingDesc: 'رائعة', fragrance: 'العطور', fragranceDesc: 'فاخرة', explore: 'اكتشف المزيد ←' },
        products: { featured: 'مميز', clothingTitle: 'الأزياء', fragranceTitle: 'العطور', viewAllClothing: 'عرض الكل', viewAllFragrance: 'عرض الكل', quickView: 'عرض سريع', addToCart: 'أضف للسلة' },
        about: { subtitle: 'قصتنا', title: 'عن TapingTrading', text1: 'ن curate أفضل المنتجات.', text2: 'كل منتج يتم اختياره بعناية.', years: 'سنوات', brands: 'علامات', customers: 'عملاء' },
        newsletter: { title: 'النشرة', desc: 'احصل على التحديثات', placeholder: 'البريد', button: 'اشترك' },
        footer: { desc: 'أزياء فاخرة من كل العالم.', quickLinks: 'روابط', service: 'خدمة', contact: 'اتصل', shipping: 'شحن', returns: 'إرجاع', privacy: 'خصوصية', contactUs: 'اتصل', globalSourcing: 'عالمي', copyright: 'جميع الحقوق.' },
        cart: { title: 'السلة', empty: 'فارغة', total: 'المجموع', checkout: 'إتمام', addedToCart: 'تمت الإضافة' },
        search: { placeholder: 'ابحث...', noResults: 'لا نتائج' },
        notifications: { subscribeSuccess: 'شكراً!', invalidEmail: 'بريد غير صالح', cartAdded: 'تمت الإضافة' }
    }
};

// Initialize translations from embedded data
Object.keys(translationsData).forEach(key => {
    translations[key] = translationsData[key];
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initNewsletter();
    initQuickView();
    
    // Initialize product system
    initProductSystem();
    
    // Initialize search & cart
    initSearch();
    initCartSidebar();
    initProductModal();
    
    // Initialize multi-language
    initI18n();
});

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ========================================
   Mobile Menu
   ======================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (!menuBtn || !nav) return;
    
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Animate hamburger
        const spans = menuBtn.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/* ========================================
   Scroll Reveal Animation
   ======================================== */
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for product cards
                const card = entry.target;
                const parent = card.parentElement;
                const siblings = Array.from(parent.querySelectorAll('.product-card'));
                const cardIndex = siblings.indexOf(card);
                
                setTimeout(() => {
                    card.classList.add('visible');
                }, cardIndex * 100);
                
                observer.unobserve(card);
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        observer.observe(card);
    });
    
    // Also observe sections for fade in effect
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
}

/* ========================================
   Smooth Scroll
   ======================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   Newsletter Form
   ======================================== */
function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input = form.querySelector('.newsletter-input');
        const email = input.value.trim();
        
        if (email) {
            // Simple validation
            if (isValidEmail(email)) {
                // Show success message
                showNotification('Thank you for subscribing!', 'success');
                input.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/* ========================================
   Quick View Button
   ======================================== */
function initQuickView() {
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            const productCategory = productCard.querySelector('.product-category').textContent;
            
            // In production, this would open a modal with product details
            console.log('Quick View:', productName, productPrice, productCategory);
            
            // Show a placeholder notification
            showNotification(`Loading ${productName}...`, 'info');
        });
    });
}

/* ========================================
   Add CSS for notifications
   ======================================== */
const notificationStyles = `
    .notification {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        padding: 16px 32px;
        background-color: #333;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 9999;
    }
    
    .notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .notification-success {
        background-color: #2ecc71;
    }
    
    .notification-error {
        background-color: #e74c3c;
    }
    
    .notification-info {
        background-color: #3498db;
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

/* ========================================
   Cart Functionality (Placeholder)
   ======================================== */
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
    
    // Animate cart
    cartCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
    
    showNotification(`${product.name} added to cart`, 'success');
}

/* ========================================
   Image Lazy Loading Enhancement
   ======================================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ========================================
   Dynamic Product System
   ======================================== */
let productData = { clothing: [], fragrance: [] };
let cart = [];

async function initProductSystem() {
    try {
        const response = await fetch('data/products.json');
        productData = await response.json();
        
        // Render featured products
        renderFeaturedProducts();
        
        // Initialize product filters
        initProductFilters();
        
        console.log('Product system initialized:', 
            productData.clothing.length + productData.fragrance.length, 'products');
    } catch (error) {
        console.error('Failed to load products:', error);
        // Fallback to static HTML content
    }
}

function renderFeaturedProducts() {
    // Render clothing products
    const clothingGrid = document.querySelector('#clothing .products-grid');
    if (clothingGrid) {
        const featuredClothing = productData.clothing.filter(p => p.featured);
        clothingGrid.innerHTML = featuredClothing.map(product => 
            createProductCard(product, 'clothing')
        ).join('');
    }
    
    // Render fragrance products
    const fragranceGrid = document.querySelector('#fragrance .products-grid');
    if (fragranceGrid) {
        const featuredFragrance = productData.fragrance.filter(p => p.featured);
        fragranceGrid.innerHTML = featuredFragrance.map(product => 
            createProductCard(product, 'fragrance')
        ).join('');
    }
    
    // Re-initialize quick view buttons
    initQuickView();
}

function createProductCard(product, type) {
    const priceFormatted = product.price.toLocaleString('zh-CN');
    const images = product.images || [product.image || ''];
    
    // Generate thumbnails for carousel
    const thumbnailsHTML = images.map((img, index) => 
        `<div class="carousel-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${img}" alt="${product.name}">
        </div>`
    ).join('');
    
    return `
        <div class="product-card" data-id="${product.id}" data-type="${type}">
            <div class="product-image">
                <div class="product-carousel" data-product-id="${product.id}">
                    <div class="carousel-main">
                        ${images.map((img, index) => 
                            `<img src="${img}" alt="${product.name}" loading="lazy" class="carousel-image ${index === 0 ? 'active' : ''}" data-index="${index}">`
                        ).join('')}
                        <div class="carousel-nav prev" onclick="prevImage(this)">‹</div>
                        <div class="carousel-nav next" onclick="nextImage(this)">›</div>
                    </div>
                    ${images.length > 1 ? `
                    <div class="carousel-thumbnails">
                        ${thumbnailsHTML}
                    </div>
                    ` : ''}
                </div>
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}" data-type="${type}">快速查看</button>
                    <button class="add-to-cart-btn" data-id="${product.id}" data-type="${type}">加入购物车</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-name-en">${product.nameEn}</span>
                <span class="product-price">¥${priceFormatted}</span>
            </div>
        </div>
    `;
}

/* ========================================
   Product Filters & Search
   ======================================== */
function initProductFilters() {
    const searchInput = document.querySelector('.search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterProducts(e.target.value);
        });
    }
    
    if (filterButtons.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                filterByCategory(category);
                
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
}

function filterProducts(searchTerm) {
    const term = searchTerm.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.product-name').textContent.toLowerCase();
        const category = card.querySelector('.product-category').textContent.toLowerCase();
        
        if (name.includes(term) || category.includes(term)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = '';
        } else {
            const cardCategory = card.querySelector('.product-category').textContent;
            if (cardCategory === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

/* ========================================
   Shopping Cart
   ======================================== */
function addToCart(productId, type) {
    const products = productData[type];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Check if already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartDisplay();
        showNotification(`已添加 ${product.name} 到购物车`, 'success');
        
        // Save to localStorage
        saveCartToStorage();
    }
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        
        // Animate
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

function saveCartToStorage() {
    localStorage.setItem('taping_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('taping_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartDisplay();
    }
}

// Initialize cart from storage
loadCartFromStorage();

/* ========================================
   Add to Cart Button Handler
   ======================================== */
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = e.target.dataset.id;
        const type = e.target.dataset.type;
        addToCart(productId, type);
    }
});

/* ========================================
   Search Functionality
   ======================================== */
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchOverlay) return;
    
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        if (searchInput) searchInput.focus();
    });
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
}

function performSearch(term) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    if (term.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = [...productData.clothing, ...productData.fragrance]
        .filter(p => p.name.toLowerCase().includes(term.toLowerCase()) || 
                     p.nameEn.toLowerCase().includes(term.toLowerCase()) ||
                     p.category.toLowerCase().includes(term.toLowerCase()))
        .slice(0, 8);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">未找到相关产品</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <div class="search-result-item" data-id="${product.id}" data-type="${productData.clothing.find(c => c.id === product.id) ? 'clothing' : 'fragrance'}">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
                <span class="search-result-category">${product.category}</span>
                <h4>${product.name}</h4>
                <span>¥${product.price.toLocaleString('zh-CN')}</span>
            </div>
        </div>
    `).join('');
}

/* ========================================
   Cart Sidebar
   ======================================== */
function initCartSidebar() {
    const cartBtn = document.querySelector('.cart-btn');
    const cartClose = document.getElementById('cartClose');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (!cartBtn || !cartSidebar) return;
    
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCartSidebar);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }
}

function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty">购物车是空的</p>';
        if (cartTotalElement) cartTotalElement.textContent = '¥0';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">¥${item.price.toLocaleString('zh-CN')}</span>
                <div class="cart-item-quantity">
                    <button class="qty-btn qty-minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `).join('');
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotalElement) {
        cartTotalElement.textContent = `¥${total.toLocaleString('zh-CN')}`;
    }
}

// Cart quantity handlers
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-minus')) {
        const id = e.target.dataset.id;
        updateCartQuantity(id, -1);
    } else if (e.target.classList.contains('qty-plus')) {
        const id = e.target.dataset.id;
        updateCartQuantity(id, 1);
    } else if (e.target.classList.contains('cart-item-remove') || e.target.closest('.cart-item-remove')) {
        const id = e.target.dataset.id || e.target.closest('.cart-item-remove').dataset.id;
        removeFromCart(id);
    }
});

function updateCartQuantity(id, change) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            renderCartItems();
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCartItems();
    updateCartDisplay();
    saveCartToStorage();
    showNotification('Removed from cart', 'info');
}

/* ========================================
   Product Modal
   ======================================== */
function initProductModal() {
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
    
    // Handle quick view clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-view-btn')) {
            const productId = e.target.dataset.id;
            const type = e.target.dataset.type;
            openProductModal(productId, type);
        }
    });
}

function openProductModal(productId, type) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const products = productData[type];
    const product = products.find(p => p.id === productId);
    
    if (!product || !modalBody) return;
    
    const isClothing = type === 'clothing';
    const images = product.images || [product.image || ''];
    const indicators = images.map((img, index) => 
        `<span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
    ).join('');
    const imagesHTML = images.map((img, index) => 
        `<img src="${img}" alt="${product.name}" class="modal-carousel-image ${index === 0 ? 'active' : ''}" data-index="${index}">`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-product-grid">
            <div class="modal-product-image">
                <div class="modal-carousel">
                    ${imagesHTML}
                    ${images.length > 1 ? `
                        <div class="carousel-nav prev" onclick="modalPrevImage(this)">‹</div>
                        <div class="carousel-nav next" onclick="modalNextImage(this)">›</div>
                        <div class="carousel-dots">${indicators}</div>
                    ` : ''}
                </div>
            </div>
            <div class="modal-product-details">
                <span class="modal-product-category">${product.category}</span>
                <h2 class="modal-product-name">${product.name}</h2>
                <p class="modal-product-name-en">${product.nameEn}</p>
                <p class="modal-product-price">¥${product.price.toLocaleString('zh-CN')}</p>
                <p class="modal-product-description">${product.description}</p>
                
                ${isClothing ? `
                    <div class="product-options">
                        <div class="option-group">
                            <label>尺码</label>
                            <div class="option-buttons">
                                ${product.sizes.map(size => `
                                    <button class="option-btn" data-option="size">${size}</button>
                                `).join('')}
                            </div>
                        </div>
                        <div class="option-group">
                            <label>颜色</label>
                            <div class="option-buttons">
                                ${product.colors.map(color => `
                                    <button class="option-btn" data-option="color">${color}</button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                ` : `
                    <div class="product-options">
                        <div class="option-group">
                            <label>香调</label>
                            <p class="product-notes">${product.notes}</p>
                        </div>
                        <div class="option-group">
                            <label>规格</label>
                            <p class="product-size">${product.size}</p>
                        </div>
                    </div>
                `}
                
                <div class="modal-product-actions">
                    <button class="btn btn-primary modal-add-to-cart" data-id="${product.id}" data-type="${type}">
                        加入购物车
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add option button handlers
    const optionBtns = modalBody.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            optionBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
    
    // Add to cart from modal
    const addToCartBtn = modalBody.querySelector('.modal-add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id, type);
            closeProductModal();
        });
    }
    
    modal.classList.add('active');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('active');
}

/* ========================================
   Product Image Carousel
   ======================================== */
function prevImage(navBtn) {
    const carousel = navBtn.closest('.product-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    switchImage(carousel, newIndex);
}

function nextImage(navBtn) {
    const carousel = navBtn.closest('.product-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    switchImage(carousel, newIndex);
}

function switchImage(carousel, newIndex) {
    const images = carousel.querySelectorAll('.carousel-image');
    const thumbnails = carousel.querySelectorAll('.carousel-thumbnail');
    
    images.forEach((img, i) => {
        img.classList.toggle('active', i === newIndex);
    });
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === newIndex);
    });
}

// Initialize thumbnail click handlers after products render
document.addEventListener('click', function(e) {
    if (e.target.closest('.carousel-thumbnail')) {
        const thumb = e.target.closest('.carousel-thumbnail');
        const carousel = thumb.closest('.product-carousel');
        const index = parseInt(thumb.dataset.index);
        switchImage(carousel, index);
    }
});

/* Modal Carousel Functions */
function modalPrevImage(navBtn) {
    const modalCarousel = navBtn.closest('.modal-carousel');
    const images = modalCarousel.querySelectorAll('.modal-carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    images.forEach((img, i) => img.classList.toggle('active', i === newIndex));
    modalCarousel.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === newIndex));
}

function modalNextImage(navBtn) {
    const modalCarousel = navBtn.closest('.modal-carousel');
    const images = modalCarousel.querySelectorAll('.modal-carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    images.forEach((img, i) => img.classList.toggle('active', i === newIndex));
    modalCarousel.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === newIndex));
}

/* ========================================
   Multi-language System (i18n)
   ======================================== */
function initI18n() {
    // Get saved language or detect browser language
    const savedLang = localStorage.getItem('taping_lang');
    const browserLang = navigator.language.split('-')[0];
    
    // Priority: saved > browser > default (en)
    let targetLang = savedLang || 
        (translations[browserLang] ? browserLang : 'en');
    
    // Ensure we have the target language
    if (!translations[targetLang]) {
        targetLang = 'en';
    }
    
    setLanguage(targetLang);
    createLanguageSwitcher();
}

function setLanguage(langCode) {
    if (!translations[langCode]) return;
    
    currentLang = langCode;
    localStorage.setItem('taping_lang', langCode);
    
    // Update document direction (for RTL support)
    const dir = translations[langCode].meta.dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = langCode;
    
    // Update all translatable elements
    updatePageTranslations();
    updateLanguageSwitcher();
}

function updatePageTranslations() {
    const t = translations[currentLang];
    if (!t) return;
    
    // Navigation
    updateElement('[data-i18n="nav.home"]', t.nav.home);
    updateElement('[data-i18n="nav.clothing"]', t.nav.clothing);
    updateElement('[data-i18n="nav.fragrance"]', t.nav.fragrance);
    updateElement('[data-i18n="nav.about"]', t.nav.about);
    
    // Hero section
    updateElement('[data-i18n="hero.subtitle"]', t.hero.subtitle);
    updateElement('[data-i18n="hero.title"]', t.hero.title);
    updateElement('[data-i18n="hero.desc"]', t.hero.desc);
    updateElement('[data-i18n="hero.ctaClothing"]', t.hero.ctaClothing);
    updateElement('[data-i18n="hero.ctaFragrance"]', t.hero.ctaFragrance);
    updateElement('[data-i18n="hero.scroll"]', t.hero.scroll);
    
    // Categories
    updateElement('[data-i18n="categories.subtitle"]', t.categories.subtitle);
    updateElement('[data-i18n="categories.title"]', t.categories.title);
    updateElement('[data-i18n="categories.clothing"]', t.categories.clothing);
    updateElement('[data-i18n="categories.clothingDesc"]', t.categories.clothingDesc);
    updateElement('[data-i18n="categories.fragrance"]', t.categories.fragrance);
    updateElement('[data-i18n="categories.fragranceDesc"]', t.categories.fragranceDesc);
    updateElements('[data-i18n="categories.explore"]', t.categories.explore);
    
    // Products
    updateElement('[data-i18n="products.subtitle"]', t.products.featured);
    updateElement('[data-i18n="products.clothingTitle"]', t.products.clothingTitle);
    updateElement('[data-i18n="products.fragranceTitle"]', t.products.fragranceTitle);
    updateElement('[data-i18n="products.viewAllClothing"]', t.products.viewAllClothing);
    updateElement('[data-i18n="products.viewAllFragrance"]', t.products.viewAllFragrance);
    
    // About section
    updateElement('[data-i18n="about.subtitle"]', t.about.subtitle);
    updateElement('[data-i18n="about.title"]', t.about.title);
    updateElements('[data-i18n="about.text1"]', t.about.text1);
    updateElements('[data-i18n="about.text2"]', t.about.text2);
    updateElement('[data-i18n="about.years"]', t.about.years);
    updateElement('[data-i18n="about.brands"]', t.about.brands);
    updateElement('[data-i18n="about.customers"]', t.about.customers);
    
    // Newsletter
    updateElement('[data-i18n="newsletter.title"]', t.newsletter.title);
    updateElement('[data-i18n="newsletter.desc"]', t.newsletter.desc);
    updateElement('[data-i18n="newsletter.button"]', t.newsletter.button);
    
    // Footer
    updateElement('[data-i18n="footer.desc"]', t.footer.desc);
    updateElement('[data-i18n="footer.quickLinks"]', t.footer.quickLinks);
    updateElement('[data-i18n="footer.service"]', t.footer.service);
    updateElement('[data-i18n="footer.contact"]', t.footer.contact);
    updateElement('[data-i18n="footer.shipping"]', t.footer.shipping);
    updateElement('[data-i18n="footer.returns"]', t.footer.returns);
    updateElement('[data-i18n="footer.privacy"]', t.footer.privacy);
    updateElement('[data-i18n="footer.contactUs"]', t.footer.contactUs);
    updateElement('[data-i18n="footer.globalSourcing"]', t.footer.globalSourcing);
    updateElement('[data-i18n="footer.copyright"]', t.footer.copyright);
    
    // Cart
    updateElement('[data-i18n="cart.title"]', t.cart.title);
    updateElement('[data-i18n="cart.empty"]', t.cart.empty);
    updateElement('[data-i18n="cart.total"]', t.cart.total);
    updateElement('[data-i18n="cart.checkout"]', t.cart.checkout);
    
    // Search
    updateElement('[data-i18n="search.placeholder"]', t.search.placeholder);
    
    // Update newsletter placeholder
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) newsletterInput.placeholder = t.newsletter.placeholder;
    
    // Update quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.textContent = t.products.quickView;
    });
    
    // Update add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.textContent = t.products.addToCart;
    });
}

function updateElement(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function updateElements(selector, text) {
    document.querySelectorAll(selector).forEach(el => el.textContent = text);
}

function createLanguageSwitcher() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;
    
    // Check if switcher already exists
    if (document.querySelector('.lang-switcher')) return;
    
    const currentLangInfo = languages.find(l => l.code === currentLang) || languages[0];
    
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
        <button class="lang-current" id="langCurrent">
            <span class="lang-flag">${currentLangInfo.flag}</span>
            <span class="lang-code">${currentLang.toUpperCase()}</span>
            <svg class="lang-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>
        <div class="lang-dropdown" id="langDropdown">
            ${languages.map(lang => `
                <button class="lang-option ${lang.code === currentLang ? 'active' : ''}" data-lang="${lang.code}">
                    <span class="lang-flag">${lang.flag}</span>
                    <span class="lang-name">${lang.name}</span>
                </button>
            `).join('')}
        </div>
    `;
    
    const cartBtn = headerActions.querySelector('.cart-btn');
    if (cartBtn) cartBtn.after(switcher);
    
    document.getElementById('langCurrent').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('langDropdown').classList.toggle('show');
        e.currentTarget.classList.toggle('active');
    });
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.dataset.lang);
            document.getElementById('langDropdown').classList.remove('show');
            document.getElementById('langCurrent').classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!switcher.contains(e.target)) {
            document.getElementById('langDropdown').classList.remove('show');
            document.getElementById('langCurrent').classList.remove('active');
        }
    });
}

function updateLanguageSwitcher() {
    const currentFlag = document.querySelector('.lang-flag');
    const currentCode = document.querySelector('.lang-code');
    const currentLangInfo = languages.find(l => l.code === currentLang);
    
    if (currentFlag && currentLangInfo) currentFlag.textContent = currentLangInfo.flag;
    if (currentCode) currentCode.textContent = currentLang.toUpperCase();
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });
}