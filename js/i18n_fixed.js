/**
 * Luxury Trading - Multi-language System (i18n)
 * Supports: English, 中文, Deutsch, Français, Español, العربية
 */

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

/**
 * Initialize i18n system
 */
async function initI18n() {
    console.log('Initializing i18n...');
    
    try {
        // Load all translation files
        const promises = languages.map(lang => 
            fetch(`data/translations/${lang.code}.json`)
                .then(res => {
                    if (!res.ok) throw new Error(`Failed to load ${lang.code}`);
                    return res.json();
                })
                .then(data => {
                    translations[lang.code] = data;
                    console.log(`Loaded: ${lang.code}`);
                })
                .catch(err => console.error(`Error loading ${lang.code}:`, err))
        );
        
        await Promise.allSettled(promises);
        
        console.log('Loaded translations:', Object.keys(translations));
        
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
        
        console.log('Setting language to:', targetLang);
        await setLanguage(targetLang);
        
        // Create language switcher UI
        createLanguageSwitcher();
        
        console.log('i18n initialized successfully!');
    } catch (error) {
        console.error('Failed to initialize i18n:', error);
    }
}

/**
 * Set the current language
 */
async function setLanguage(langCode) {
    if (!translations[langCode]) {
        console.warn('Language not available:', langCode);
        return;
    }
    
    currentLang = langCode;
    localStorage.setItem('taping_lang', langCode);
    
    // Update document direction (for RTL support)
    const dir = translations[langCode].meta.dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = langCode;
    
    // Add RTL class for styling
    if (dir === 'rtl') {
        document.documentElement.classList.add('rtl');
    } else {
        document.documentElement.classList.remove('rtl');
    }
    
    // Update all translatable elements
    updatePageTranslations();
    
    // Update language switcher active state
    updateLanguageSwitcher();
    
    console.log('Language set to:', langCode, 'Direction:', dir);
}

/**
 * Update all page translations
 */
function updatePageTranslations() {
    const t = translations[currentLang];
    if (!t) return;
    
    // Navigation
    updateElement('[data-i18n="nav.home"]', t.nav.home);
    updateElement('[data-i18n="nav.clothing"]', t.nav.clothing);
    updateElement('[data-i18n="nav.fragrance"]', t.nav.fragrance);
    updateElement('[data-i18n="nav.about"]', t.nav.about);
    
    // User dropdown nav items
    updateElement('[data-i18n="nav.signIn"]', t.nav.signIn);
    updateElement('[data-i18n="nav.createAccount"]', t.nav.createAccount);
    updateElement('[data-i18n="nav.profile"]', t.nav.profile);
    updateElement('[data-i18n="nav.myOrders"]', t.nav.myOrders);
    updateElement('[data-i18n="nav.addresses"]', t.nav.addresses);
    updateElement('[data-i18n="nav.accountSettings"]', t.nav.accountSettings);
    updateElement('[data-i18n="nav.signOut"]', t.nav.signOut);
    
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
    
    // Login/Register form elements
    updateElement('[data-i18n="login.email"]', t.login.email);
    updateElement('[data-i18n="login.password"]', t.login.password);
    updateElement('[data-i18n="login.submit"]', t.login.submit);
    updateElement('[data-i18n="register.name"]', t.register.name);
    updateElement('[data-i18n="register.email"]', t.register.email);
    updateElement('[data-i18n="register.password"]', t.register.password);
    updateElement('[data-i18n="register.submit"]', t.register.submit);
    updateElement('[data-i18n="login.toggleToRegister"]', t.login.toggleToRegister);
    
    // Update newsletter placeholder
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) {
        newsletterInput.placeholder = t.newsletter.placeholder;
    }
    
    // Update quick view buttons
