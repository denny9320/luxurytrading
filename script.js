/* ========================================
    LuxuryTrading - JavaScript
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
    return currency_symbol = currency.symbol + convertedPrice.toFixed(2);
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
        footer: { desc: 'Curating luxury from around the world.', quickLinks: 'Quick Links', service: 'Customer Service', contact: 'Contact Us', shipping: 'Shipping', returns: 'Returns', privacy: 'Privacy', contactUs: 'Contact', globalSourcing: 'Global Sourcing', email: 'kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'All rights reserved.' },
        returns: { 
            title: 'Returns & Exchanges Policy',
            scope: 'This policy applies to all wholesale (B2B) and custom (OEM/ODM) orders.',
            eligibilityTitle: 'Return Eligibility',
            eligibilityDesc: 'You are eligible for a return if:',
            eligibility1: 'Within <strong>30 days</strong> of receipt for quality issues or manufacturing defects (functional defects)',
            eligibility2: 'Product materially deviates from confirmed specifications (size, material, function, standards, etc.)',
            eligibility3: 'Wrong item shipped (wrong model, configuration, quantity beyond tolerance)',
            eligibility4: 'Visible damage or shortage during transit (report within <strong>48 hours</strong> of delivery)',
            nonReturnableTitle: '❌ Non-Returnable Items',
            nonReturnable1: '<strong>Custom Products (OEM/ODM):</strong> Products customized with your logo, specific colors, or unique packaging cannot be returned unless functionally defective.',
            nonReturnable2: '<strong>Clearance Items:</strong> Unless otherwise agreed in writing, clearance items are final sale.',
            nonReturnable3: '<strong>Buyer\'s Remorse:</strong> Change of mind, ordering errors, or refusal to pay customs duties are not eligible for return.',
            nonReturnable4: '<strong>Tampered Items:</strong> Products disassembled, modified, or altered by the buyer are not eligible for return.',
            processTitle: 'Return Process (RMA System)',
            step1Title: 'Step 1: Contact Support',
            step1Desc: 'Within <strong>7 days</strong> of delivery, contact our support team:',
            step1Email: 'Email',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: 'Provide order number, reason for return, and clear photo/video evidence',
            step2Title: 'Step 2: Get RMA Authorization',
            step2Desc: 'Our support team will review your request within <strong>24-48 hours</strong> and provide via email:',
            step2Rma: 'Return Merchandise Authorization (RMA) number',
            step2Address: 'Return address and packing instructions',
            step3Title: 'Step 3: Ship the Return',
            step3Desc: 'Ship the item back within <strong>14 days</strong> of receiving RMA:',
            step3Trackable: 'Use a trackable shipping service (DHL, FedEx, UPS, etc.)',
            step3Mark: 'Clearly mark the RMA number on the package',
            step3Keep: 'Keep the tracking number as proof',
            step3Include: 'Item must include all accessories and original packaging',
            customsTitle: '⚠️ Customs Declaration',
            customsDesc: 'For international returns, mark the parcel as "Returned Goods – No Commercial Value" to avoid duties. If duties occur due to incorrect declaration, they will be deducted from your refund.',
            step4Title: 'Step 4: Inspection & Refund',
            step4Desc: 'After our warehouse receives your return, we will inspect:',
            step4Process: 'Refund will be processed within <strong>5-10 business days</strong> after inspection',
            step4Method: 'Refund will be issued to your original payment method',
            step4Bank: 'Your bank/payment provider may take an additional <strong>5-15 business days</strong> to post the credit',
            costDeductionsTitle: '️ Cost Deductions',
            costDeductions1: 'Original shipping fees (if any) are non-refundable unless return is due to our error',
            costDeductions2: 'Missing accessories or damaged packaging may result in reasonable deductions',
            costDeductions3: 'Bank fees, payment processing fees, and currency exchange losses are non-refundable',
            costTitle: 'Cost Responsibility',
            costReason: 'Reason',
            costShipping: 'Shipping Cost',
            costReturn: 'Return Shipping',
            costQuality: 'Quality Defect',
            costWrong: 'Wrong Item Shipped',
            costTransit: 'Transit Damage',
            costRemorse: 'Buyer\'s Remorse',
            costOrdering: 'Ordering Error',
            costCustoms: 'Refused Customs Duties',
            costWePay: '✓ We pay',
            costBuyerPay: '✗ Buyer pays',
            costBuyerFee: '✗ Buyer pays + 20% fee',
            exchangeTitle: 'Exchange Policy',
            exchangeDesc: 'Due to the nature of B2B wholesale and custom orders, we <strong>do not offer direct exchanges</strong>.',
            exchangeInstruction: 'If you need a replacement, please:',
            exchange1: 'First return the original item and receive refund following the process above',
            exchange2: 'Then place a new order for the desired item',
            exchange3: 'This ensures faster processing and accurate inventory management',
            cancelTitle: 'Order Cancellation',
            cancelDesc: 'Orders can be cancelled if:',
            cancel1: 'Once packing and shipping have started, cancellation is no longer possible',
            cancel2: 'Custom orders can be cancelled before specs are confirmed and production begins',
            cancelContact: 'Please contact us as soon as possible',
            disputeTitle: 'Dispute Resolution',
            disputeDesc: 'If you are not satisfied with our resolution, you can appeal:',
            dispute1: 'Appeal within <strong>7 days</strong> of receiving our resolution',
            dispute2: 'Provide new evidence or detailed explanation',
            dispute3: 'We will re-review and provide a final decision within <strong>48 hours</strong>',
            contactTitle: 'Contact Us',
            contactDesc: 'For any return/exchange questions, feel free to contact us:',
            contactEmail: 'Email',
            contactWhatsapp: 'WhatsApp',
            contactHours: 'Working Hours',
            contactHoursValue: 'Monday-Friday, 9:00-18:00 (GMT+8)',
            contactAddress: 'Return Address',
            contactAddressValue: 'Will be provided in RMA email',
            updateTitle: '📌 Policy Updates',
            updateDesc: 'We reserve the right to modify this policy at any time. Significant changes will be notified via email or website notice.',
            effectiveDate: 'Effective Date',
            effectiveDateValue: 'May 3, 2026'
        },
        cart: { title: 'Shopping Cart', empty: 'Your cart is empty', total: 'Total', checkout: 'Checkout', addedToCart: 'added to cart' },
        search: { placeholder: 'Search products...', noResults: 'No products found' },
        notifications: { subscribeSuccess: 'Thank you!', invalidEmail: 'Invalid email', cartAdded: 'added to cart' }
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
        footer: { desc: '甄选全球奢华产品。', quickLinks: '快速链接', service: '客户服务', contact: '联系我们', shipping: '配送说明', returns: '退换政策', privacy: '隐私条款', contactUs: '联系方式', globalSourcing: '全球采购', email: '邮箱: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: '版权所有。' },
        returns: { 
            title: '退换货政策',
            scope: '本政策适用于所有批发（B2B）和定制（OEM/ODM）订单。',
            eligibilityTitle: '一、退货资格',
            eligibilityDesc: '在以下情况下，您有资格申请退货：',
            eligibility1: '收到商品后 <strong>30天内</strong> 发现质量问题或制造缺陷（功能性缺陷）',
            eligibility2: '收到的商品与确认的规格严重不符（尺寸、材质、功能、标准等）',
            eligibility3: '发货错误（发错型号、配置、数量超出公差范围）',
            eligibility4: '运输过程中包装破损或商品损坏（需在收货后<strong>48小时内</strong>报告）',
            nonReturnableTitle: '❌ 不可退货的情况',
            nonReturnable1: '<strong>定制产品（OEM/ODM）：</strong>已印制Logo、特殊颜色、定制包装、特殊规格的产品，除非存在功能性质量问题，否则不接受退货。',
            nonReturnable2: '<strong>清仓/特价商品：</strong>除非另有书面约定，否则清仓商品视为最终销售，不接受退货。',
            nonReturnable3: '<strong>买家原因：</strong>因买家改变主意、订购错误、未支付关税等原因，不接受退货（除非商品存在质量问题）。',
            nonReturnable4: '<strong>已拆改商品：</strong>买家自行拆解、改装、维修或物理改动的产品，不接受退货。',
            processTitle: '二、退货流程（RMA系统）',
            step1Title: '第1步：联系客服',
            step1Desc: '在收货后 <strong>7天内</strong>，通过以下方式联系我们的客服团队：',
            step1Email: '邮箱',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: '提供订单号、退货原因、以及清晰的照片/视频证据',
            step2Title: '第2步：获取RMA授权',
            step2Desc: '我们的客服团队将在 <strong>24-48小时内</strong> 审核您的申请，并通过邮件发送：',
            step2Rma: '退货授权号（RMA Number）',
            step2Address: '退货地址和包装指引',
            step3Title: '第3步：寄回商品',
            step3Desc: '在收到RMA后 <strong>14天内</strong> 寄回商品：',
            step3Trackable: '使用可追踪的物流服务（DHL、FedEx、UPS等）',
            step3Mark: '在包裹外清晰标注RMA号码',
            step3Keep: '保留运单号作为凭证',
            step3Include: '商品需包含全部配件和原包装',
            customsTitle: '⚠️ 海关申报',
            customsDesc: '国际退货时，请在包裹上标注"Returned Goods – No Commercial Value"以避免关税。如因申报不当产生关税，将从您的退款中扣除。',
            step4Title: '第4步：验收与退款',
            step4Desc: '我们的仓库收到退货后，将进行验收：',
            step4Process: '验收通过后，将在 <strong>5-10个工作日</strong> 内处理退款',
            step4Method: '退款将原路返回至您的原支付方式',
            step4Bank: '您的银行/支付提供商可能需要额外 <strong>5-15个工作日</strong> 完成入账',
            costDeductionsTitle: '️ 费用扣除',
            costDeductions1: '原始运费（如有）不予退还，除非退货原因是我们的错误',
            costDeductions2: '如缺少配件、包装破损或商品被使用/损坏，将合理扣除相应费用',
            costDeductions3: '银行手续费、支付处理费（如PayPal费用）和汇率波动损失不予退还',
            costTitle: '三、费用责任',
            costReason: '退货原因',
            costShipping: '运费责任',
            costReturn: '退货运费',
            costQuality: '质量问题',
            costWrong: '发错商品',
            costTransit: '运输损坏',
            costRemorse: '买家改变主意',
            costOrdering: '订购错误',
            costCustoms: '拒付关税',
            costWePay: '✓ 我们承担',
            costBuyerPay: '✗ 买家承担',
            costBuyerFee: '✗ 买家承担 + 20% 手续费',
            exchangeTitle: '四、换货政策',
            exchangeDesc: '由于B2B批发和定制订单的特殊性，我们<strong>不直接提供换货服务</strong>。',
            exchangeInstruction: '如需更换商品，请：',
            exchange1: '先按上述流程退回原商品并获得退款',
            exchange2: '然后重新下单购买所需商品',
            exchange3: '这样可确保更快的处理速度和准确的库存管理',
            cancelTitle: '五、订单取消',
            cancelDesc: '订单在以下情况下可以取消：',
            cancel1: '商品尚未进入包装和发货流程',
            cancel2: '定制订单在确认规格并投入生产前',
            cancelContact: '请尽快联系客服',
            disputeTitle: '六、争议解决',
            disputeDesc: '如对我们的处理结果不满意，您可以通过以下方式申诉：',
            dispute1: '在收到处理结果后 <strong>7天内</strong> 提出申诉',
            dispute2: '提供新的证据或详细说明争议点',
            dispute3: '我们将在 <strong>48小时内</strong> 重新审核并给出最终决定',
            contactTitle: '七、联系我们',
            contactDesc: '如有任何退换货相关问题，请随时联系我们：',
            contactEmail: '邮箱',
            contactWhatsapp: 'WhatsApp',
            contactHours: '工作时间',
            contactHoursValue: '周一至周五，9:00-18:00 (GMT+8)',
            contactAddress: '退货地址',
            contactAddressValue: '将在RMA邮件中提供',
            updateTitle: '📌 政策更新',
            updateDesc: '我们保留随时修改本退换货政策的权利。重大变更将通过邮件或网站通知。',
            effectiveDate: '生效日期',
            effectiveDateValue: '2026年5月3日'
        },
        cart: { title: '购物车', empty: '购物车是空的', total: '总计', checkout: '立即结算', addedToCart: '已添到购物车' },
        search: { placeholder: '搜索产品...', noResults: '未找到产品' },
        notifications: { subscribeSuccess: '感谢订阅！', invalidEmail: '请输入有效邮箱', cartAdded: '已添加' }
    },
    'de': {
        meta: { langCode: 'de', langName: 'Deutsch', dir: 'ltr' },
        nav: { home: 'Startseite', clothing: 'Kleidung', fragrance: 'Düfte', about: 'Über uns', signIn: 'Anmelden', createAccount: 'Konto erstellen', profile: 'Mein Profil', myOrders: 'Meine Bestellungen', addresses: 'Adressen', accountSettings: 'Kontoeinstellungen', signOut: 'Abmelden' },
        hero: { subtitle: 'Luxus', title: 'Luxus Kollektionen', desc: 'Kuratierte Luxusprodukte', ctaClothing: 'Kleidung', ctaFragrance: 'Düfte', scroll: 'Scroll' },
        categories: { subtitle: 'Kollektionen', title: 'Auswahl', clothing: 'Mode', clothingDesc: 'Exquisit', fragrance: 'Düfte', fragranceDesc: 'Premium', explore: 'Mehr →' },
        category: { all: 'Alle', shoes: 'Schuhe', bags: 'Taschen', perfume: 'Parfüm', sunglasses: 'Sonnenbrillen', watches: 'Uhren' },
        products: { featured: 'Empfohlen', clothingTitle: 'Kleidung', fragranceTitle: 'Düfte', viewAllClothing: 'Alle', viewAllFragrance: 'Alle', quickView: 'Schnellansicht', addToCart: 'In den Warenkorb' },
        about: { subtitle: 'Geschichte', title: 'Über uns', text1: 'Wir kuratieren die feinsten Produkte.', text2: 'Jedes Produkt wird sorgfältig ausgewählt.', years: 'Jahre', brands: 'Marken', customers: 'Kunden' },
        newsletter: { title: 'Newsletter', desc: 'Updates erhalten', placeholder: 'Email', button: 'Abonnieren' },
        footer: { desc: 'Luxus aus aller Welt.', quickLinks: 'Links', service: 'Service', contact: 'Kontakt', shipping: 'Versand', returns: 'Retouren', privacy: 'Datenschutz', contactUs: 'Kontakt', globalSourcing: 'Global', email: 'E-Mail: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'Rechte vorbehalten.' },
        returns: { 
            title: 'Rückgabe- und Umtauschrichtlinien',
            scope: 'Diese Richtlinie gilt für alle Großhandels- (B2B) und Maßanfertigungsaufträge (OEM/ODM).',
            eligibilityTitle: 'Rückgabeberechtigung',
            eligibilityDesc: 'Sie sind berechtigt zur Rückgabe, wenn:',
            eligibility1: 'Innerhalb von <strong>30 Tagen</strong> nach Erhalt bei Qualitätsproblemen oder Herstellungsfehlern (funktionale Mängel)',
            eligibility2: 'Produkt weicht erheblich von bestätigten Spezifikationen ab (Größe, Material, Funktion, Standards usw.)',
            eligibility3: 'Falsches Produkt versendet (falsches Modell, Konfiguration, Menge außerhalb der Toleranz)',
            eligibility4: 'Sichtbare Transportschäden oder Fehlmengen (Meldung innerhalb von <strong>48 Stunden</strong> nach Erhalt)',
            nonReturnableTitle: '❌ Nicht rückgabefähige Artikel',
            nonReturnable1: '<strong>Maßanfertigungen (OEM/ODM):</strong> Produkte mit Ihrem Logo, speziellen Farben oder individueller Verpackung können nicht zurückgegeben werden, sofern keine funktionalen Mängel vorliegen.',
            nonReturnable2: '<strong>Ausverkaufsartikel:</strong> Sofern nicht schriftlich anders vereinbart, sind Ausverkaufsartikel als Endverkauf (keine Rückgabe) zu betrachten.',
            nonReturnable3: '<strong>Käuferreue:</strong> Sinneswandel, Bestellfehler oder Verweigerung von Zollgebühren berechtigen nicht zur Rückgabe.',
            nonReturnable4: '<strong>Manipulierte Artikel:</strong> Vom Käufer zerlegte, modifizierte oder veränderte Produkte sind nicht rückgabefähig.',
            processTitle: 'Rückgabeprozess (RMA-System)',
            step1Title: 'Schritt 1: Support kontaktieren',
            step1Desc: 'Kontaktieren Sie unser Support-Team innerhalb von <strong>7 Tagen</strong> nach Erhalt:',
            step1Email: 'E-Mail',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: 'Geben Sie Bestellnummer, Rückgabegrund und klare Foto-/Video-Nachweise an',
            step2Title: 'Schritt 2: RMA-Autorisierung erhalten',
            step2Desc: 'Unser Support-Team prüft Ihre Anfrage innerhalb von <strong>24-48 Stunden</strong> und sendet Ihnen per E-Mail:',
            step2Rma: 'RMA-Nummer (Return Merchandise Authorization)',
            step2Address: 'Rückgabeanschrift und Verpackungshinweise',
            step3Title: 'Schritt 3: Artikel zurücksenden',
            step3Desc: 'Senden Sie den Artikel innerhalb von <strong>14 Tagen</strong> nach Erhalt der RMA zurück:',
            step3Trackable: 'Verwenden Sie einen nachverfolgbaren Versanddienst (DHL, FedEx, UPS usw.)',
            step3Mark: 'Vermerken Sie die RMA-Nummer deutlich auf dem Paket',
            step3Keep: 'Bewahren Sie die Sendungsnummer als Nachweis auf',
            step3Include: 'Der Artikel muss alle Zubehörteile und die Originalverpackung enthalten',
            customsTitle: '⚠️ Zollerklärung',
            customsDesc: 'Für internationale Rückgaben markieren Sie das Paket als "Returned Goods – No Commercial Value", um Zölle zu vermeiden. Entstehen aufgrund falscher Deklaration Zölle, werden diese von Ihrer Rückerstattung abgezogen.',
            step4Title: 'Schritt 4: Prüfung & Rückerstattung',
            step4Desc: 'Nach Erhalt der Rückgabe in unserem Lager prüfen wir diese:',
            step4Process: 'Die Rückerstattung wird innerhalb von <strong>5-10 Werktagen</strong> nach Prüfung bearbeitet',
            step4Method: 'Die Rückerstattung erfolgt über die ursprüngliche Zahlungsmethode',
            step4Bank: 'Ihre Bank/der Zahlungsanbieter kann bis zu <strong>5-15 weitere Werktage</strong> benötigen, um die Gutschrift zu verbuchen',
            costDeductionsTitle: 'Kostenabzüge',
            costDeductions1: 'Ursprüngliche Versandkosten (sofern angefallen) werden nicht erstattet, es sei denn, die Rückgabe erfolgt aufgrund unseres Fehlers',
            costDeductions2: 'Fehlendes Zubehör oder beschädigte Verpackungen können zu angemessenen Abzügen führen',
            costDeductions3: 'Bankgebühren, Zahlungsabwicklungsgebühren und Währungskursverluste werden nicht erstattet',
            costTitle: 'Kostenverantwortung',
            costReason: 'Rückgabegrund',
            costShipping: 'Versandkosten',
            costReturn: 'Rückversandkosten',
            costQuality: 'Qualitätsmangel',
            costWrong: 'Falscher Artikel versendet',
            costTransit: 'Transportschaden',
            costRemorse: 'Käuferreue',
            costOrdering: 'Bestellfehler',
            costCustoms: 'Verweigerte Zollgebühren',
            costWePay: '✓ Wir tragen die Kosten',
            costBuyerPay: '✗ Käufer trägt die Kosten',
            costBuyerFee: '✗ Käufer trägt die Kosten + 20% Gebühr',
            exchangeTitle: 'Umtauschrichtlinien',
            exchangeDesc: 'Aufgrund der Natur von B2B-Großhandels- und Maßanfertigungsaufträgen bieten wir <strong>keinen direkten Umtausch</strong> an.',
            exchangeInstruction: 'Wenn Sie eine Ersatzlieferung benötigen, gehen Sie wie folgt vor:',
            exchange1: 'Senden Sie zuerst den ursprünglichen Artikel zurück und erhalten Sie die Rückerstattung gemäß dem obigen Prozess',
            exchange2: 'Platzieren Sie dann eine neue Bestellung für den gewünschten Artikel',
            exchange3: 'Dies gewährleistet eine schnellere Bearbeitung und genaue Bestandsverwaltung',
            cancelTitle: 'Auftragsstornierung',
            cancelDesc: 'Aufträge können storniert werden, wenn:',
            cancel1: 'Sobald die Verpackung und der Versand begonnen haben, ist eine Stornierung nicht mehr möglich',
            cancel2: 'Maßanfertigungen können storniert werden, bevor die Spezifikationen bestätigt und die Produktion begonnen hat',
            cancelContact: 'Bitte kontaktieren Sie uns so schnell wie möglich',
            disputeTitle: 'Streitbeilegung',
            disputeDesc: 'Wenn Sie mit unserer Lösung nicht zufrieden sind, können Sie Einspruch einlegen:',
            dispute1: 'Einspruch innerhalb von <strong>7 Tagen</strong> nach Erhalt unserer Lösung',
            dispute2: 'Legen Sie neue Beweise oder eine detaillierte Erklärung vor',
            dispute3: 'Wir prüfen erneut und geben innerhalb von <strong>48 Stunden</strong> eine endgültige Entscheidung',
            contactTitle: 'Kontakt',
            contactDesc: 'Bei Fragen zur Rückgabe/ zum Umtausch können Sie uns gerne kontaktieren:',
            contactEmail: 'E-Mail',
            contactWhatsapp: 'WhatsApp',
            contactHours: 'Geschäftszeiten',
            contactHoursValue: 'Montag-Freitag, 9:00-18:00 (GMT+8)',
            contactAddress: 'Rückgabeanschrift',
            contactAddressValue: 'Wird in der RMA-E-Mail bereitgestellt',
            updateTitle: '📌 Richtlinienaktualisierungen',
            updateDesc: 'Wir behalten uns das Recht vor, diese Richtlinie jederzeit zu ändern. Wesentliche Änderungen werden per E-Mail oder auf der Website bekannt gegeben.',
            effectiveDate: 'Gültigkeitsdatum',
            effectiveDateValue: '3. Mai 2026'
        },
        cart: { title: 'Warenkorb', empty: 'Leer', total: 'Gesamt', checkout: 'Kasse', addedToCart: 'hinzugefügt' },
        search: { placeholder: 'Suchen...', noResults: 'Keine Ergebnisse' },
        notifications: { subscribeSuccess: 'Danke!', invalidEmail: 'Ungültige Email', cartAdded: 'hinzugefügt' }
    },
    'fr': {
        meta: { langCode: 'fr', langName: 'Français', dir: 'ltr' },
        nav: { home: 'Accueil', clothing: 'Vêtements', fragrance: 'Parfums', about: 'À propos', signIn: 'Se connecter', createAccount: 'Créer un compte', profile: 'Mon profil', myOrders: 'Mes commandes', addresses: 'Adresses', accountSettings: 'Paramètres du compte', signOut: 'Se déconnecter' },
        hero: { subtitle: 'Luxe', title: 'Collections de Luxe', desc: 'Produits de luxe curatés', ctaClothing: 'Vêtements', ctaFragrance: 'Parfums', scroll: 'Défiler' },
        categories: { subtitle: 'Collections', title: 'Sélection', clothing: 'Mode', clothingDesc: 'Exquise', fragrance: 'Parfums', fragranceDesc: 'Premium', explore: 'Explorer →' },
        category: { all: 'Tous', shoes: 'Chaussures', bags: 'Sacs', perfume: 'Parfum', sunglasses: 'Lunettes', watches: 'Montres' },
        products: { featured: 'En vedette', clothingTitle: 'Vêtements', fragranceTitle: 'Parfums', viewAllClothing: 'Tous', viewAllFragrance: 'Tous', quickView: 'Aperçu', addToCart: 'Ajouter au panier' },
        about: { subtitle: 'Notre histoire', title: 'À propos', text1: 'Nous curons les meilleurs produits.', text2: 'Chaque produit est soigneusement choisi.', years: 'Ans', brands: 'Marques', customers: 'Clients' },
        newsletter: { title: 'Newsletter', desc: 'Recevez les mises à jour', placeholder: 'Email', button: "S'abonner" },
        footer: { desc: 'Luxe du monde entier.', quickLinks: 'Liens', service: 'Service', contact: 'Contact', shipping: 'Livraison', returns: 'Retours', privacy: 'Confidentialité', contactUs: 'Contact', globalSourcing: 'Mondial', email: 'E-mail: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'Droits réservés.' },
        returns: { 
            title: 'Politique de retour et d\'échange',
            scope: 'Cette politique s\'applique à toutes les commandes de gros (B2B) et de personnalisation (OEM/ODM).',
            eligibilityTitle: 'Éligibilité au retour',
            eligibilityDesc: 'Vous êtes éligible au retour si :',
            eligibility1: 'Dans les <strong>30 jours</strong> suivant la réception en cas de problème de qualité ou de défaut de fabrication (défauts fonctionnels)',
            eligibility2: 'Le produit s\'écarte matériellement des spécifications confirmées (taille, matériau, fonction, normes, etc.)',
            eligibility3: 'Article incorrect expédié (modèle, configuration, quantité hors tolérance)',
            eligibility4: 'Dommages visibles ou manquants lors du transport (déclaration dans les <strong>48 heures</strong> suivant la livraison)',
            nonReturnableTitle: '❌ Articles non retournables',
            nonReturnable1: '<strong>Produits personnalisés (OEM/ODM) :</strong> Les produits marqués de votre logo, couleurs spécifiques ou emballage unique ne peuvent être retournés sauf s\'ils présentent un défaut fonctionnel.',
            nonReturnable2: '<strong>Articles en liquidation :</strong> Sauf accord écrit contraire, les articles en liquidation sont considérés comme des ventes finales.',
            nonReturnable3: '<strong>Remords de l\'acheteur :</strong> Changement d\'avis, erreurs de commande ou refus de payer les droits de douane ne sont pas éligibles au retour.',
            nonReturnable4: '<strong>Articles modifiés :</strong> Les produits démontés, modifiés ou altérés par l\'acheteur ne sont pas éligibles au retour.',
            processTitle: 'Processus de retour (système RMA)',
            step1Title: 'Étape 1 : Contacter le support',
            step1Desc: 'Dans les <strong>7 jours</strong> suivant la livraison, contactez notre équipe de support :',
            step1Email: 'E-mail',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: 'Fournir le numéro de commande, la raison du retour et des preuves photo/vidéo claires',
            step2Title: 'Étape 2 : Obtenir une autorisation RMA',
            step2Desc: 'Notre équipe de support examinera votre demande dans les <strong>24-48 heures</strong> et vous enverra par e-mail :',
            step2Rma: 'Numéro d\'autorisation de retour de marchandises (RMA)',
            step2Address: 'Adresse de retour et instructions d\'emballage',
            step3Title: 'Étape 3 : Expédier le retour',
            step3Desc: 'Expédiez l\'article dans les <strong>14 jours</strong> suivant la réception de la RMA :',
            step3Trackable: 'Utilisez un service de livraison traçable (DHL, FedEx, UPS, etc.)',
            step3Mark: 'Marquez clairement le numéro RMA sur le colis',
            step3Keep: 'Conservez le numéro de suivi comme preuve',
            step3Include: 'L\'article doit inclure tous les accessoires et l\'emballage d\'origine',
            customsTitle: '⚠️ Déclaration en douane',
            customsDesc: 'Pour les retours internationaux, marquez le colis comme "Marchandises retournées – Sans valeur commerciale" pour éviter les droits. Si des droits sont engagés en raison d\'une déclaration incorrecte, ils seront déduits de votre remboursement.',
            step4Title: 'Étape 4 : Inspection et remboursement',
            step4Desc: 'Après réception de votre retour dans notre entrepôt, nous procéderons à l\'inspection :',
            step4Process: 'Le remboursement sera traité dans les <strong>5-10 jours ouvrables</strong> suivant l\'inspection',
            step4Method: 'Le remboursement sera effectué via votre méthode de paiement d\'origine',
            step4Bank: 'Votre banque/fournisseur de paiement peut nécessiter <strong>5 à 15 jours ouvrables supplémentaires</strong> pour créditer le compte',
            costDeductionsTitle: 'Déductions de coûts',
            costDeductions1: 'Les frais d\'expédition initiaux (le cas échéant) ne sont pas remboursables, sauf si le retour est dû à notre erreur',
            costDeductions2: 'Les accessoires manquants ou l\'emballage endommagé peuvent entraîner des déductions raisonnables',
            costDeductions3: 'Les frais bancaires, les frais de traitement des paiements et les pertes de change ne sont pas remboursables',
            costTitle: 'Responsabilité des coûts',
            costReason: 'Raison du retour',
            costShipping: 'Frais d\'expédition',
            costReturn: 'Frais de retour',
            costQuality: 'Défaut de qualité',
            costWrong: 'Article incorrect expédié',
            costTransit: 'Dommages lors du transport',
            costRemorse: 'Remords de l\'acheteur',
            costOrdering: 'Erreur de commande',
            costCustoms: 'Droits de douane refusés',
            costWePay: '✓ À notre charge',
            costBuyerPay: '✗ À la charge de l\'acheteur',
            costBuyerFee: '✗ À la charge de l\'acheteur + 20% de frais',
            exchangeTitle: 'Politique d\'échange',
            exchangeDesc: 'En raison de la nature des commandes de gros B2B et de personnalisation, nous <strong>ne proposons pas d\'échange direct</strong>.',
            exchangeInstruction: 'Si vous avez besoin d\'un remplacement, veuillez :',
            exchange1: 'Retourner d\'abord l\'article original et recevoir le remboursement selon le processus ci-dessus',
            exchange2: 'Passer ensuite une nouvelle commande pour l\'article souhaité',
            exchange3: 'Cela garantit un traitement plus rapide et une gestion précise des stocks',
            cancelTitle: 'Annulation de commande',
            cancelDesc: 'Les commandes peuvent être annulées si :',
            cancel1: 'Une fois l\'emballage et l\'expédition commencés, l\'annulation n\'est plus possible',
            cancel2: 'Les commandes personnalisées peuvent être annulées avant la confirmation des spécifications et le début de la production',
            cancelContact: 'Veuillez nous contacter dès que possible',
            disputeTitle: 'Résolution des litiges',
            disputeDesc: 'Si vous n\'êtes pas satisfait de notre résolution, vous pouvez faire appel :',
            dispute1: 'Faire appel dans les <strong>7 jours</strong> suivant la réception de notre résolution',
            dispute2: 'Fournir de nouvelles preuves ou une explication détaillée',
            dispute3: 'Nous réexaminerons et fournirons une décision finale dans les <strong>48 heures</strong>',
            contactTitle: 'Nous contacter',
            contactDesc: 'Pour toute question relative au retour/échange, n\'hésitez pas à nous contacter :',
            contactEmail: 'E-mail',
            contactWhatsapp: 'WhatsApp',
            contactHours: 'Heures d\'ouverture',
            contactHoursValue: 'Lundi-Vendredi, 9:00-18:00 (GMT+8)',
            contactAddress: 'Adresse de retour',
            contactAddressValue: 'Sera fournie dans l\'e-mail RMA',
            updateTitle: '📌 Mises à jour de la politique',
            updateDesc: 'Nous nous réservons le droit de modifier cette politique à tout moment. Les changements importants seront notifiés par e-mail ou via le site web.',
            effectiveDate: 'Date d\'effet',
            effectiveDateValue: '3 mai 2026'
        },
        cart: { title: 'Panier', empty: 'Vide', total: 'Total', checkout: 'Commander', addedToCart: 'ajouté' },
        search: { placeholder: 'Rechercher...', noResults: 'Aucun résultat' },
        notifications: { subscribeSuccess: 'Merci!', invalidEmail: 'Email invalide', cartAdded: 'ajouté' }
    },
    'es': {
        meta: { langCode: 'es', langName: 'Español', dir: 'ltr' },
        nav: { home: 'Inicio', clothing: 'Ropa', fragrance: 'Fragancias', about: 'Nosotros', signIn: 'Iniciar sesión', createAccount: 'Crear cuenta', profile: 'Mi perfil', myOrders: 'Mis pedidos', addresses: 'Direcciones', accountSettings: 'Configuración de cuenta', signOut: 'Cerrar sesión' },
        hero: { subtitle: 'Lujo', title: 'Colecciones de Lujo', desc: 'Productos de lujo curados', ctaClothing: 'Ropa', ctaFragrance: 'Fragancias', scroll: 'Desplazar' },
        categories: { subtitle: 'Colecciones', title: 'Selección', clothing: 'Moda', clothingDesc: 'Exquisita', fragrance: 'Fragancias', fragranceDesc: 'Premium', explore: 'Explorar →' },
        category: { all: 'Todos', shoes: 'Zapatos', bags: 'Bolsas', perfume: 'Perfume', sunglasses: 'Gafas', watches: 'Relojes' },
        products: { featured: 'Destacados', clothingTitle: 'Ropa', fragranceTitle: 'Fragancias', viewAllClothing: 'Ver todos', viewAllFragrance: 'Ver todos', quickView: 'Vista rápida', addToCart: 'Añadir al carrito' },
        about: { subtitle: 'Nuestra historia', title: 'Sobre nosotros', text1: 'Curamos los mejores productos.', text2: 'Cada producto se selecciona cuidadosamente.', years: 'Años', brands: 'Marcas', customers: 'Clientes' },
        newsletter: { title: 'Newsletter', desc: 'Recibe actualizaciones', placeholder: 'Email', button: 'Suscribirse' },
        footer: { desc: 'Moda de lujo de todo el mundo.', quickLinks: 'Enlaces', service: 'Servicio', contact: 'Contacto', shipping: 'Envío', returns: 'Devoluciones', privacy: 'Privacidad', contactUs: 'Contacto', globalSourcing: 'Global', email: 'Correo: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19313614241', copyright: 'Derechos reservados.' },
        returns: { 
            title: 'Política de Devoluciones y Cambios',
            scope: 'Esta política se aplica a todos los pedidos al por mayor (B2B) y de personalización (OEM/ODM).',
            eligibilityTitle: 'Elegibilidad para Devoluciones',
            eligibilityDesc: 'Es elegible para una devolución si:',
            eligibility1: 'Dentro de los <strong>30 días</strong> posteriores a la recepción por problemas de calidad o defectos de fabricación (defectos funcionales)',
            eligibility2: 'El producto se desvía materialmente de las especificaciones confirmadas (tamaño, material, función, estándares, etc.)',
            eligibility3: 'Artículo incorrecto enviado (modelo, configuración, cantidad fuera de tolerancia)',
            eligibility4: 'Daños visibles o faltantes durante el transporte (informar dentro de las <strong>48 horas</strong> posteriores a la entrega)',
            nonReturnableTitle: '❌ Artículos No Devolubles',
            nonReturnable1: '<strong>Productos Personalizados (OEM/ODM):</strong> Los productos con su logotipo, colores específicos o empaque único no pueden devolverse a menos que tengan defectos funcionales.',
            nonReturnable2: '<strong>Artículos de Liquidación:</strong> Salvo acuerdo escrito en contrario, los artículos de liquidación se consideran ventas finales.',
            nonReturnable3: '<strong>Arrepentimiento del Comprador:</strong> Cambio de opinión, errores de pedido o negativa a pagar aranceles aduaneros no son elegibles para devolución.',
            nonReturnable4: '<strong>Artículos Alterados:</strong> Los productos desmontados, modificados o alterados por el comprador no son elegibles para devolución.',
            processTitle: 'Proceso de Devolución (Sistema RMA)',
            step1Title: 'Paso 1: Contactar al Soporte',
            step1Desc: 'Dentro de los <strong>7 días</strong> posteriores a la entrega, contacte a nuestro equipo de soporte:',
            step1Email: 'Correo Electrónico',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: 'Proporcione el número de pedido, motivo de devolución y pruebas claras con fotos/videos',
            step2Title: 'Paso 2: Obtener Autorización RMA',
            step2Desc: 'Nuestro equipo de soporte revisará su solicitud dentro de <strong>24-48 horas</strong> y proporcionará por correo electrónico:',
            step2Rma: 'Número de Autorización de Devolución de Mercancía (RMA)',
            step2Address: 'Dirección de devolución e instrucciones de empaque',
            step3Title: 'Paso 3: Enviar la Devolución',
            step3Desc: 'Envíe el artículo dentro de los <strong>14 días</strong> posteriores a la recepción de la RMA:',
            step3Trackable: 'Utilice un servicio de envío rastreable (DHL, FedEx, UPS, etc.)',
            step3Mark: 'Marque claramente el número RMA en el paquete',
            step3Keep: 'Conserve el número de seguimiento como comprobante',
            step3Include: 'El artículo debe incluir todos los accesorios y el empaque original',
            customsTitle: '⚠️ Declaración de Aduanas',
            customsDesc: 'Para devoluciones internacionales, marque el paquete como "Returned Goods – No Commercial Value" para evitar aranceles. Si se generan aranceles debido a una declaración incorrecta, se deducirán de su reembolso.',
            step4Title: 'Paso 4: Inspección y Reembolso',
            step4Desc: 'Después de recibir su devolución en nuestro almacén, realizaremos la inspección:',
            step4Process: 'El reembolso se procesará dentro de <strong>5-10 días hábiles</strong> después de la inspección',
            step4Method: 'El reembolso se emitirá a través de su método de pago original',
            step4Bank: 'Su banco/proveedor de pagos puede tardar <strong>5 a 15 días hábiles adicionales</strong> en acreditar el reembolso',
            costDeductionsTitle: 'Deducciones de Costos',
            costDeductions1: 'Los gastos de envío iniciales (si los hubiera) no son reembolsables, a menos que la devolución sea debido a nuestro error',
            costDeductions2: 'Los accesorios faltantes o el empaque dañado pueden resultar en deducciones razonables',
            costDeductions3: 'Los cargos bancarios, tarifas de procesamiento de pagos y pérdidas por tipo de cambio no son reembolsables',
            costTitle: 'Responsabilidad de Costos',
            costReason: 'Motivo de la Devolución',
            costShipping: 'Costos de Envío',
            costReturn: 'Costos de Devolución',
            costQuality: 'Defecto de Calidad',
            costWrong: 'Artículo Incorrecto Enviado',
            costTransit: 'Daños en el Transporte',
            costRemorse: 'Arrepentimiento del Comprador',
            costOrdering: 'Error de Pedido',
            costCustoms: 'Aranceles Aduaneros Rechazados',
            costWePay: '✓ A nuestro cargo',
            costBuyerPay: '✗ A cargo del comprador',
            costBuyerFee: '✗ A cargo del comprador + 20% de tarifa',
            exchangeTitle: 'Política de Cambios',
            exchangeDesc: 'Debido a la naturaleza de los pedidos al por mayor B2B y de personalización, <strong>no ofrecemos cambios directos</strong>.',
            exchangeInstruction: 'Si necesita un reemplazo, por favor:',
            exchange1: 'Primero devuelva el artículo original y reciba el reembolso siguiendo el proceso anterior',
            exchange2: 'Luego realice un nuevo pedido del artículo deseado',
            exchange3: 'Esto garantiza un procesamiento más rápido y una gestión precisa del inventario',
            cancelTitle: 'Cancelación de Pedidos',
            cancelDesc: 'Los pedidos pueden cancelarse si:',
            cancel1: 'Una vez iniciado el empaque y envío, ya no es posible cancelar',
            cancel2: 'Los pedidos personalizados pueden cancelarse antes de la confirmación de especificaciones e inicio de producción',
            cancelContact: 'Por favor contáctenos lo antes posible',
            disputeTitle: 'Resolución de Disputas',
            disputeDesc: 'Si no está satisfecho con nuestra resolución, puede apelar:',
            dispute1: 'Apelar dentro de los <strong>7 días</strong> posteriores a la recepción de nuestra resolución',
            dispute2: 'Proporcione nuevas pruebas o una explicación detallada',
            dispute3: 'Revisaremos nuevamente y proporcionaremos una decisión final dentro de <strong>48 horas</strong>',
            contactTitle: 'Contáctenos',
            contactDesc: 'Para cualquier pregunta sobre devoluciones/cambios, no dude en contactarnos:',
            contactEmail: 'Correo Electrónico',
            contactWhatsapp: 'WhatsApp',
            contactHours: 'Horario de Atención',
            contactHoursValue: 'Lunes-Viernes, 9:00-18:00 (GMT+8)',
            contactAddress: 'Dirección de Devolución',
            contactAddressValue: 'Se proporcionará en el correo electrónico RMA',
            updateTitle: '📌 Actualizaciones de la Política',
            updateDesc: 'Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios significativos se notificarán por correo electrónico o a través del sitio web.',
            effectiveDate: 'Fecha de Vigencia',
            effectiveDateValue: '3 de mayo de 2026'
        },
        cart: { title: 'Carrito', empty: 'Vacío', total: 'Total', checkout: 'Finalizar', addedToCart: 'añadido' },
        search: { placeholder: 'Buscar...', noResults: 'Sin resultados' },
        notifications: { subscribeSuccess: '¡Gracias!', invalidEmail: 'Email inválido', cartAdded: 'añadido' }
    },
    'ar': {
        meta: { langCode: 'ar', langName: 'العربية', dir: 'rtl' },
        nav: { home: 'الرئيسية', clothing: 'الأزياء', fragrance: 'العطور', about: 'من نحن', signIn: 'تسجيل الدخول', createAccount: 'إنشاء حساب', profile: 'ملفي', myOrders: 'طلباتي', addresses: 'العناوين', accountSettings: 'إعدادات الحساب', signOut: 'تسجيل الخروج' },
        hero: { subtitle: 'الرفاهية', title: 'مجموعات الرفاهية', desc: 'منتجات راقية', ctaClothing: 'الأزياء', ctaFragrance: 'العطور', scroll: 'انتقل للأسفل' },
        categories: { subtitle: 'المجموعات', title: 'اختيارات', clothing: 'الأزياء', clothingDesc: 'راقية', fragrance: 'العطور', fragranceDesc: 'فاخرة', explore: 'اكتشف المزيد ←' },
        category: { all: 'الكل', shoes: 'أحذية', bags: 'حقائب', perfume: 'عطور', sunglasses: 'نظارات', watches: 'ساعات' },
        products: { featured: 'مميز', clothingTitle: 'الأزياء', fragranceTitle: 'العطور', viewAllClothing: 'عرض الكل', viewAllFragrance: 'عرض الكل', quickView: 'عرض سريع', addToCart: 'أضف للسلة' },
        about: { subtitle: 'قصتنا', title: 'عننا', text1: 'ن curate أفضل المنتجات.', text2: 'كل منتج يتم اختياره بعناية.', years: 'سنوات', brands: 'علامات', customers: 'عملاء' },
        newsletter: { title: 'النشرة', desc: 'احصل على التحديثات', placeholder: 'البريد', button: 'اشترك' },
        footer: { desc: 'منتجات راقية من كل العالم.', quickLinks: 'روابط', service: 'خدمة', contact: 'اتصل', shipping: 'شحن', returns: 'إرجاع', privacy: 'خصوصية', contactUs: 'اتصل', globalSourcing: 'عالمي', email: 'البريد: kyx9320@163.com', whatsapp1: 'واتساب: +86 13397655758', whatsapp2: 'واتساب: +86 19313614241', copyright: 'جميع الحقوق.' },
        returns: { 
            title: 'سياسة الإرجاع والاستبدال',
            scope: 'تنطبق هذه السياسة على جميع طلبات الجملة (B2B) والطلبات المخصصة (OEM/ODM).',
            eligibilityTitle: 'أهلية الإرجاع',
            eligibilityDesc: 'أنت مؤهل للإرجاع إذا:',
            eligibility1: 'خلال <strong>30 يومًا</strong> من الاستلام لمشاكل الجودة أو عيوب التصنيع (العيوب الوظيفية)',
            eligibility2: 'يختلف المنتج جوهريًا عن المواصفات المؤكدة (الحجم، المادة، الوظيفة، المعايير، إلخ)',
            eligibility3: 'تم شحن منتج خاطئ (طراز، تكوين، كمية خارج التسامح)',
            eligibility4: 'أضرار مرئية أو نقص أثناء النقل (الإبلاغ خلال <strong>48 ساعة</strong> من التسليم)',
            nonReturnableTitle: '❌ العناصر غير القابلة للإرجاع',
            nonReturnable1: '<strong>المنتجات المخصصة (OEM/ODM):</strong> المنتجات التي تحمل شعارك أو ألوانًا محددة أو تغليفًا فريدًا لا يمكن إرجاعها ما لم تكن بها عيوب وظيفية.',
            nonReturnable2: 'العناصر المباعة في التصفية: ما لم يتفق كتابةً خلاف ذلك، تُعتبر عناصر التصفية مبيعات نهائية.',
            nonReturnable3: 'ندم المشتري: تغيير الرأي، أخطاء الطلب، أو رفض دفع الرسوم الجمركية لا تؤهل للإرجاع.',
            nonReturnable4: 'العناصر المعدلة: المنتجات التي تم فكها أو تعديلها أو تغييرها بواسطة المشتري غير مؤهلة للإرجاع.',
            processTitle: 'عملية الإرجاع (نظام RMA)',
            step1Title: 'الخطوة 1: الاتصال بالدعم',
            step1Desc: 'خلال <strong>7 أيام</strong> من التسليم، اتصل بفريق الدعم الخاص بنا:',
            step1Email: 'البريد الإلكتروني',
            step1Whatsapp: 'واتساب',
            step1Evidence: 'تقديم رقم الطلب، سبب الإرجاع، وأدلة واضحة بالصور/الفيديو',
            step2Title: 'الخطوة 2: الحصول على تفويض RMA',
            step2Desc: 'سيراجع فريق الدعم طلبك خلال <strong>24-48 ساعة</strong> ويرسل عبر البريد الإلكتروني:',
            step2Rma: 'رقم تفويض إرجاع البضائع (RMA)',
            step2Address: 'عنوان الإرجاع وتعليمات التغليف',
            step3Title: 'الخطوة 3: شحن الإرجاع',
            step3Desc: 'أرسل العنصر خلال <strong>14 يومًا</strong> من استلام RMA:',
            step3Trackable: 'استخدم خدمة شحن قابلة للتتبع (DHL، FedEx، UPS، إلخ)',
            step3Mark: 'ضع علامة واضحة على رقم RMA على الطرد',
            step3Keep: 'احتفظ برقم التتبع كإثبات',
            step3Include: 'يجب أن يتضمن العنصر جميع الملحقات والتغليف الأصلي',
            customsTitle: '⚠️ الإقرار الجمركي',
            customsDesc: 'للمرتجعات الدولية، ضع علامة على الطرد كـ "بضائع مرتجعة – لا قيمة تجارية" لتجنب الرسوم الجمركية. إذا حدثت رسوم بسبب إقرار خاطئ، ستُخصم من مبلع الاسترداد.',
            step4Title: 'الخطوة 4: الفحص والاسترداد',
            step4Desc: 'بعد استلام مرتجعك في مستودعنا، سنقوم بالفحص:',
            step4Process: 'سيتم معالجة الاسترداد خلال <strong>5-10 أيام عمل</strong> بعد الفحص',
            step4Method: 'سيتم إصدار الاسترداد عبر طريقة الدفع الأصلية الخاصة بك',
            step4Bank: 'قد يستغرق بنكك/مزود الدفع <strong>5-15 يوم عمل إضافية</strong> لإضافة الرصيد',
            costDeductionsTitle: 'خصومات التكاليف',
            costDeductions1: 'رسوم الشحن الأصلية (إن وجدت) غير مستردة، إلا إذا كان الإرجاع بسبب خطأ منا',
            costDeductions2: 'الملحقات المفقودة أو التغليف التالف قد يؤدي إلى خصومات معقولة',
            costDeductions3: 'الرسوم المصرفية، ورسوم معالجة الدفع، وخسائر تحويل العملة غير مستردة',
            costTitle: 'مسؤولية التكاليف',
            costReason: 'سبب الإرجاع',
            costShipping: 'تكلفة الشحن',
            costReturn: 'تكلفة الإرجاع',
            costQuality: 'عيب في الجودة',
            costWrong: 'تم شحن منتج خاطئ',
            costTransit: 'ضرر أثناء النقل',
            costRemorse: 'ندم المشتري',
            costOrdering: 'خطأ في الطلب',
            costCustoms: 'الرسوم الجمركية المرفوضة',
            costWePay: '✓ نحن ندفع',
            costBuyerPay: '✗ المشتري يدفع',
            costBuyerFee: '✗ المشتري يدفع + 20% رسوم',
            exchangeTitle: 'سياسة الاستبدال',
            exchangeDesc: 'نظرًا لطبيعة طلبات الجملة B2B والطلبات المخصصة، فإننا <strong>لا نقدم استبدالاً مباشراً</strong>.',
            exchangeInstruction: 'إذا كنت بحاجة إلى بديل، يرجى:',
            exchange1: 'أولاً أعد العنصر الأصلي واستلم الاسترداد وفقًا للعملية المذكورة أعلاه',
            exchange2: 'ثم قم بطلب جديد للعنصر المطلوب',
            exchange3: 'هذا يضمن معالجة أسرع وإدارة دقيقة للمخزون',
            cancelTitle: 'إلغاء الطلب',
            cancelDesc: 'يمكن إلغاء الطلبات إذا:',
            cancel1: 'بمجرد بدء التغليف والشحن، لا يمكن الإلغاء بعد ذلك',
            cancel2: 'يمكن إلغاء الطلبات المخصصة قبل تأكيد المواصفات وبدء الإنتاج',
            cancelContact: 'يرجى الاتصال بنا في أقرب وقت ممكن',
            disputeTitle: 'حل النزاعات',
            disputeDesc: 'إذا كنت غير راضٍ عن حلنا، يمكنك الاستئناف:',
            dispute1: 'الاستئناف خلال <strong>7 أيام</strong> من استلام حلنا',
            dispute2: 'تقديم أدلة جديدة أو شرح مفصل',
            dispute3: 'سنعيد المراجعة ونقدم قراراً نهائياً خلال <strong>48 ساعة</strong>',
            contactTitle: 'اتصل بنا',
            contactDesc: 'لأي أسئلة حول الإرجاع/الاستبدال، لا تتردد في الاتصال بنا:',
            contactEmail: 'البريد الإلكتروني',
            contactWhatsapp: 'واتساب',
            contactHours: 'ساعات العمل',
            contactHoursValue: 'الاثنين-الجمعة، 9:00-18:00 (GMT+8)',
            contactAddress: 'عنوان الإرجاع',
            contactAddressValue: 'سيتم توفيره في البريد الإلكتروني RMA',
            updateTitle: '📌 تحديثات السياسة',
            updateDesc: 'نحتفظ بالحق في تعديل هذه السياسة في أي وقت. ستتم إشعارات التغييرات المهمة عبر البريد الإلكتروني أو إشعار على الموقع.',
            effectiveDate: 'تاريخ السريان',
            effectiveDateValue: '3 مايو 2026'
        },
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
        console.log('Loading products from data/products.json...');
        
        // Try fetching with cache bypass
        const response = await fetch('data/products.json?_=' + Date.now());
        
        if (!response.ok) {
            console.error('Fetch failed:', response.status, response.statusText);
            throw new Error('Failed to fetch: ' + response.status);
        }
        
        const json = await response.json();
        console.log('Raw JSON:', json);
        
        productData = json;
        console.log('productData set to:', productData);
        
        // Render featured products
        renderFeaturedProducts();
        
        // Initialize product filters
        initProductFilters();
        
        // Initialize search (after products are loaded)
        initSearch();
        
        console.log('Product system initialized');
    } catch (error) {
        console.error('Failed to load products:', error);
        
        // Try loading embedded fallback data
        console.log('Using fallback product data');
        productData = {
            clothing: [
                { id: "c00001", name: "Supreme FW25 Jacket", nameEn: "Supreme FW25 Jacket", price: 170, category: "Clothing" },
                { id: "c00002", name: "MONCLER Puffer Jacket", nameEn: "MONCLER Puffer Jacket", price: 95, category: "Clothing" },
                { id: "c00003", name: "BURBERRY Trench Coat", nameEn: "BURBERRY Trench Coat", price: 280, category: "Clothing" }
            ],
            fragrance: [
                { id: "f00001", name: "CHANEL No.5", nameEn: "CHANEL No.5", price: 120, category: "Fragrance" },
                { id: "f00002", name: "DIOR Sauvage", nameEn: "DIOR Sauvage", price: 95, category: "Fragrance" },
                { id: "f00003", name: "TOM FORD Oud Wood", nameEn: "TOM FORD Oud Wood", price: 180, category: "Fragrance" }
            ]
        };
        renderFeaturedProducts();
        initSearch();
    }
}

function renderFeaturedProducts() {
    console.log('renderFeaturedProducts called, productData:', productData);
    
    // Render clothing products with background images (3x4 grid)
    const clothingGrid = document.getElementById('clothingGrid');
    if (clothingGrid && productData?.clothing?.length > 0) {
        console.log('Rendering', productData.clothing.length, 'clothing products');
        clothingGrid.innerHTML = productData.clothing.map(product => 
            createFeaturedCard(product, 'clothing')
        ).join('');
    }
    
    // Render fragrance products with background images (3x4 grid)
    const fragranceGrid = document.getElementById('fragranceGrid');
    if (fragranceGrid && productData?.fragrance?.length > 0) {
        console.log('Rendering', productData.fragrance.length, 'fragrance products');
        fragranceGrid.innerHTML = productData.fragrance.map(product => 
            createFeaturedCard(product, 'fragrance')
        ).join('');
    }
}

function createFeaturedCard(product, type) {
    const priceFormatted = formatPrice(product.price);
    const images = product.images && product.images.length > 0 ? product.images : [];
    const mainImage = images[0] || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWViIi8+PC9zdmc+';
    
    // 根据当前语言显示产品名称
    const displayName = currentLang === 'zh' ? product.name : (product.nameEn || product.name);
    
    return `
        <div class="featured-card" data-id="${product.id}" data-type="${type}" onclick="openProductModal(this.dataset.id, this.dataset.type)" style="background-image: url('${mainImage}'); cursor: pointer;">
            <div class="featured-overlay">
                <div class="featured-info">
                    <h3 class="featured-name">${displayName}</h3>
                    <div class="featured-price">${priceFormatted}</div>
                </div>
            </div>
        </div>
    `;
}

function createProductCard(product, type) {
    const priceFormatted = formatPrice(product.price);
    // Check if image is valid
    const placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWViIi8+PC9zdmc+';
    
    // Use product images if available, otherwise use placeholder
    const images = product.images && product.images.length > 0 ? product.images : [placeholder];
    const mainImage = images[0];
    const displayName = currentLang === 'zh' ? product.name : (product.nameEn || product.name);
    
    return `
        <div class="product-card" data-id="${product.id}" data-type="${type}" onclick="openProductModal('${product.id}', '${type}')" style="cursor: pointer;">
            <div class="product-image">
                <img src="${mainImage}" alt="${product.name}" class="product-img-simple">
            </div>
            <div class="product-info">
                <span class="product-category">${type === 'clothing' ? '服装' : '香水'}</span>
                <h3 class="product-name">${displayName}</h3>
                <span class="product-name-en">${product.nameEn || ''}</span>
                <div class="product-price-display">¥${priceFormatted}</div>
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
    console.log('addToCart called:', productId, type);
    
    // 找不到type的话，根据ID推断
    if (!type) {
        type = String(productId).startsWith('f') ? 'fragrance' : 'clothing';
    }
    
    console.log('Looking in type:', type);
    
    // 确保数据加载
    if (!productData) {
        console.error('productData not loaded');
        showNotification('请稍候再试', 'error');
        return;
    }
    
    const products = productData[type];
    if (!products) {
        console.error('No products for type:', type);
        // 尝试其他类型
        if (productData.clothing) {
            type = 'clothing';
        } else if (productData.fragrance) {
            type = 'fragrance';
        } else {
            showNotification('产品数据未加载', 'error');
            return;
        }
    }
    
    const product = products ? products.find(p => p.id === productId) : null;
    
    if (!product) {
        console.error('Product not found:', productId);
        showNotification('产品未找到', 'error');
        return;
    }
    
    console.log('Adding to cart:', product.name);
    
    // 检查是否已在购物车
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
        showNotification(currentLang === 'zh' ? '已添加到购物车' : 'Added to cart', 'success');
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(currentLang === 'zh' ? '已添加到购物车' : 'Added to cart', 'success');
    }
    
    // 立即更新显示
    updateCartDisplay();
    saveCartToStorage();
    
    console.log('Cart now has', cart.length, 'items');
}

function updateCartDisplay() {
    console.log('updateCartDisplay called, cart items:', cart.length);
    
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    console.log('Total items:', totalItems, 'Total price:', cartTotal);
    
    cartCountElements.forEach(cartCount => {
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
            
            // Animate
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
    });
    
    // 更新总价显示
    const cartTotalElement = document.getElementById('cartTotal');
    if (cartTotalElement) {
        cartTotalElement.textContent = formatPrice(cartTotal);
        console.log('Cart total updated to:', formatPrice(cartTotal));
    }
    
    // 更新购物车侧边栏
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty">' + (currentLang === 'zh' ? '购物车是空的' : 'Your cart is empty') + '</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.images ? item.images[0] : ''}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                            <span class="qty-display">${item.quantity || 1}</span>
                            <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                            <button class="remove-btn" onclick="removeFromCart(${index})">${currentLang === 'zh' ? '删除' : 'Remove'}</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// 增加/减少数量
window.changeQuantity = function(index, change) {
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
        updateCartDisplay();
        saveCartToStorage();
    }
}

// 删除产品
window.removeFromCart = function(index) {
    if (cart[index]) {
        const removedItem = cart[index].name;
        cart.splice(index, 1);
        updateCartDisplay();
        saveCartToStorage();
        showNotification(currentLang === 'zh' ? '已删除 ' + removedItem : 'Removed ' + removedItem, 'success');
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

// Currency change function
window.changeCurrency = function(currencyCode) {
    currentCurrency = currencyCode;
    renderFeaturedProducts(); // Re-render to update prices
};

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
    
    const termLower = term.toLowerCase();
    const allProducts = [...(productData.clothing || []), ...(productData.fragrance || [])];
    
    const results = allProducts
        .filter(p => 
            (p.name && p.name.toLowerCase().includes(termLower)) || 
            (p.nameEn && p.nameEn.toLowerCase().includes(termLower)) ||
            (p.category && p.category.toLowerCase().includes(termLower))
        )
        .slice(0, 10);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results" style="padding:20px;text-align:center;color:#666;">未找到相关产品</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="openProductFromSearch('${product.id}', '${product.category === "Clothing" ? "clothing" : "fragrance"}')">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="search-result-info">
                <span class="search-result-category">${product.category}</span>
                <h4>${currentLang === 'zh' ? product.name : (product.nameEn || product.name)}</h4>
                <span>${formatPrice(product.price)}</span>
            </div>
        </div>
    `).join('');
}

// Open product from search results
window.openProductFromSearch = function(id, type) {
    const product = productData[type].find(p => p.id === id);
    if (product) {
        openProductModal(product, type);
        document.getElementById('searchOverlay').classList.remove('active');
    }
};

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
    console.log('Opening modal for productId:', productId, 'type:', type);
    
    // 确保type有效
    if (!type) {
        console.error('type is undefined!');
        // 尝试从ID判断类型
        type = productId && productId.startsWith('f') ? 'fragrance' : 'clothing';
        console.log('Using inferred type:', type);
    }
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modalBody) {
        console.error('modalBody not found');
        return;
    }
    
    if (!productData) {
        console.error('productData not loaded');
        return;
    }
    
    // 使用正确的key
    const products = productData[type];
    if (!products) {
        console.error('No products for type:', type, 'Available keys:', Object.keys(productData));
        // 尝试其他key
        if (productData.clothing) {
            type = 'clothing';
        } else if (productData.fragrance) {
            type = 'fragrance';
        }
    }
    
    const product = products ? products.find(p => p.id === productId) : null;
    
    if (!product) {
        console.error('Product not found, id:', productId, 'in type:', type);
        // 尝试查找
        if (productData.clothing) {
            product = productData.clothing.find(p => p.id === productId);
            type = 'clothing';
        }
        if (!product && productData.fragrance) {
            product = productData.fragrance.find(p => p.id === productId);
            type = 'fragrance';
        }
        if (!product) {
            return;
        }
    }
    
console.log('Found product:', product.name, 'type:', type);
    
    const isClothing = type === 'clothing';
    const productImages = product.images || [product.image || ''];
    
    // 存储当前产品图片数组供切换函数使用
    window.currentModalProductImages = productImages;
    
    const indicators = productImages.map((img, index) => 
        `<span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
    ).join('');
    // 缩略图HTML - 大图下方可滚动选择（仅多图时显示）
    // 使用滚动监听：当缩略图滚动到中间时，主图自动切换
    const thumbnailsHTML = productImages.length > 1 ? productImages.map((img, index) => 
        `<img src="${img}" alt="${product.name}" class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}" onmouseenter="previewThumbnail(this)" onclick="selectThumbnail(this)">`
    ).join('') : '';
    
    modalBody.innerHTML = `
        <div class="modal-product-grid">
            <div class="modal-product-image">
                <div class="modal-main-image-container">
                    <img src="${productImages[0]}" alt="${product.name}" class="modal-main-image" id="modalMainImage">
                </div>
                ${productImages.length > 1 ? `
                <div class="thumbnail-nav-row">
                    <button class="thumb-nav-btn" onclick="changeThumbnailImage(-1)">‹</button>
                    <div class="thumbnail-strip" id="thumbnailStrip">
                        ${thumbnailsHTML}
                    </div>
                    <button class="thumb-nav-btn" onclick="changeThumbnailImage(1)">›</button>
                </div>
                ` : ''}
            </div>
            <div class="modal-product-details">
                <span class="modal-product-category">${product.category}</span>
                <h2 class="modal-product-name">${currentLang === 'zh' ? product.name : (product.nameEn || product.name)}</h2>
                <p class="modal-product-name-en">${currentLang === 'en' ? product.name : (product.nameEn || product.name)}</p>
                <p class="modal-product-price">${formatPrice(product.price)}</p>
                <p class="modal-product-description">${product.description}</p>
                
${isClothing ? `
                    <div class="product-options">
                        ${product['规格1'] ? `
                        <div class="option-group">
                            <label>${product['规格1']}</label>
                            <p class="product-size">${product['规格值1'] || '默认'}</p>
                        </div>
                        ` : ''}
                        ${product['规格2'] ? `
                        <div class="option-group">
                            <label>${product['规格2']}</label>
                            <p class="product-size">${product['规格值2'] || ''}</p>
                        </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="product-options">
                        ${product['规格1'] ? `
                        <div class="option-group">
                            <label>${product['规格1']}</label>
                            <p class="product-size">${product['规格值1']}</p>
                        </div>
                        ` : ''}
                        ${product['规格2'] ? `
                        <div class="option-group">
                            <label>${product['规格2']}</label>
                            <p class="product-size">${product['规格值2']}</p>
                        </div>
                        ` : ''}
                        ${product['规格3'] ? `
                        <div class="option-group">
                            <label>${product['规格3']}</label>
                            <p class="product-size">${product['规格值3']}</p>
                        </div>
                        ` : ''}
                    </div>
`}
                
                <div class="modal-product-actions">
                    <button class="btn btn-primary modal-add-to-cart" data-id="${product.id}" data-type="${type}">
                        ${currentLang === 'zh' ? '加入购物车' : 'Add to Cart'}
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
    const modalCarousel = navBtn.closest('.modal-product-image');
    const images = modalCarousel.querySelectorAll('.modal-carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    images.forEach((img, i) => img.classList.toggle('active', i === newIndex));
    
    // 更新缩略图
    const thumbnails = modalCarousel.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === newIndex));
}

// 点击缩略图切换
window.showImage = function(index) {
    const modalImage = document.querySelector('.modal-product-image');
    if (!modalImage) return;
    
    const images = modalImage.querySelectorAll('.modal-carousel-image');
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    
    const thumbnails = modalImage.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
}

// 切换主图 - 悬停预览时调用（或点击后保持选中）
window.previewThumbnail = function(thumbEl) {
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage && window.currentModalProductImages) {
        const index = parseInt(thumbEl.dataset.index);
        mainImage.src = window.currentModalProductImages[index];
    }
}

// 选中缩略图 - 点击时调用
window.selectThumbnail = function(thumbEl) {
    // 先预览
    window.previewThumbnail(thumbEl);
    
    // 更新选中状态
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbEl.classList.add('active');
}

// 左右箭头切换缩略图和大图
window.currentThumbnailIndex = 0;

window.changeThumbnailImage = function(direction) {
    if (!window.currentModalProductImages) return;
    
    const total = window.currentModalProductImages.length;
    window.currentThumbnailIndex = (window.currentThumbnailIndex + direction + total) % total;
    
    // 更新大图
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage) {
        mainImage.src = window.currentModalProductImages[window.currentThumbnailIndex];
    }
    
    // 更新缩略图选中状态
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === window.currentThumbnailIndex);
    });
    
    // 滚动缩略图到可见区域
    const activeThumb = thumbnails[window.currentThumbnailIndex];
    if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

/* ========================================
   Multi-language System (i18n)
   ======================================== */
function initI18n() {
    // Get saved language or detect browser language
    const savedLang = localStorage.getItem('luxury_lang');
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
    localStorage.setItem('luxury_lang', langCode);
    
    // Update document direction (for RTL support)
    const dir = translations[langCode].meta.dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = langCode;
    
    // Update all translatable elements
    updatePageTranslations();
    updateLanguageSwitcher();
    
    // Re-render products with new language (check if productData is loaded)
    if (productData && productData.clothing && productData.fragrance) {
        renderFeaturedProducts();
    } else {
        // If productData is not loaded yet, wait for it to load and then re-render
        const checkInterval = setInterval(() => {
            if (productData && productData.clothing && productData.fragrance) {
                clearInterval(checkInterval);
                renderFeaturedProducts();
            }
        }, 100);

        // Clear interval after 5 seconds to prevent infinite loop
        setTimeout(() => clearInterval(checkInterval), 5000);
    }
}

function updatePageTranslations() {
    const t = translations[currentLang];
    if (!t) return;
    
// Navigation
    updateElement('[data-i18n="nav.home"]', t.nav.home);
    updateElement('[data-i18n="nav.clothing"]', t.nav.clothing);
    updateElement('[data-i18n="nav.fragrance"]', t.nav.fragrance);
    updateElement('[data-i18n="nav.about"]', t.nav.about);
    
    // User dropdown menu
    updateElements('[data-i18n="nav.profile"]', t.nav.profile);
    updateElements('[data-i18n="nav.myOrders"]', t.nav.myOrders);
    updateElements('[data-i18n="nav.addresses"]', t.nav.addresses);
    updateElements('[data-i18n="nav.accountSettings"]', t.nav.accountSettings);
    updateElements('[data-i18n="nav.signOut"]', t.nav.signOut);
    
    // Hero section
    updateElement('[data-i18n="hero.subtitle"]', t.hero.subtitle);
    updateElement('[data-i18n="hero.title"]', t.hero.title);
    updateElement('[data-i18n="hero.desc"]', t.hero.desc);
    updateElement('[data-i18n="hero.ctaClothing"]', t.hero.ctaClothing);
    updateElement('[data-i18n="hero.ctaFragrance"]', t.hero.ctaFragrance);
    updateElement('[data-i18n="hero.scroll"]', t.hero.scroll);
    
    // Category tabs
    updateElements('[data-i18n="category.all"]', t.category?.all || 'All');
    updateElements('[data-i18n="category.shoes"]', t.category?.shoes || 'Shoes');
    updateElements('[data-i18n="category.bags"]', t.category?.bags || 'Bags');
    updateElements('[data-i18n="category.perfume"]', t.category?.perfume || 'Perfume');
    updateElements('[data-i18n="category.sunglasses"]', t.category?.sunglasses || 'Sunglasses');
    updateElements('[data-i18n="category.watches"]', t.category?.watches || 'Watches');
    
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
    updateElement('[data-i18n="footer.email"]', t.footer.email);
    updateElement('[data-i18n="footer.whatsapp1"]', t.footer.whatsapp1);
    updateElement('[data-i18n="footer.whatsapp2"]', t.footer.whatsapp2);
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
    
    // Returns page translations
    if (t.returns) {
        updateElement('[data-i18n="returns.title"]', t.returns.title);
        updateElement('[data-i18n="returns.scope"]', t.returns.scope);
        updateElement('[data-i18n="returns.eligibilityTitle"]', t.returns.eligibilityTitle);
        updateElement('[data-i18n="returns.eligibilityDesc"]', t.returns.eligibilityDesc);
        updateElement('[data-i18n="returns.eligibility1"]', t.returns.eligibility1);
        updateElement('[data-i18n="returns.eligibility2"]', t.returns.eligibility2);
        updateElement('[data-i18n="returns.eligibility3"]', t.returns.eligibility3);
        updateElement('[data-i18n="returns.eligibility4"]', t.returns.eligibility4);
        updateElement('[data-i18n="returns.nonReturnableTitle"]', t.returns.nonReturnableTitle);
        updateElement('[data-i18n="returns.nonReturnable1"]', t.returns.nonReturnable1);
        updateElement('[data-i18n="returns.nonReturnable2"]', t.returns.nonReturnable2);
        updateElement('[data-i18n="returns.nonReturnable3"]', t.returns.nonReturnable3);
        updateElement('[data-i18n="returns.nonReturnable4"]', t.returns.nonReturnable4);
        updateElement('[data-i18n="returns.processTitle"]', t.returns.processTitle);
        updateElement('[data-i18n="returns.step1Title"]', t.returns.step1Title);
        updateElement('[data-i18n="returns.step1Desc"]', t.returns.step1Desc);
        updateElement('[data-i18n="returns.step1Email"]', t.returns.step1Email);
        updateElement('[data-i18n="returns.step1Whatsapp"]', t.returns.step1Whatsapp);
        updateElement('[data-i18n="returns.step1Evidence"]', t.returns.step1Evidence);
        updateElement('[data-i18n="returns.step2Title"]', t.returns.step2Title);
        updateElement('[data-i18n="returns.step2Desc"]', t.returns.step2Desc);
        updateElement('[data-i18n="returns.step2Rma"]', t.returns.step2Rma);
        updateElement('[data-i18n="returns.step2Address"]', t.returns.step2Address);
        updateElement('[data-i18n="returns.step3Title"]', t.returns.step3Title);
        updateElement('[data-i18n="returns.step3Desc"]', t.returns.step3Desc);
        updateElement('[data-i18n="returns.step3Trackable"]', t.returns.step3Trackable);
        updateElement('[data-i18n="returns.step3Mark"]', t.returns.step3Mark);
        updateElement('[data-i18n="returns.step3Keep"]', t.returns.step3Keep);
        updateElement('[data-i18n="returns.step3Include"]', t.returns.step3Include);
        updateElement('[data-i18n="returns.customsTitle"]', t.returns.customsTitle);
        updateElement('[data-i18n="returns.customsDesc"]', t.returns.customsDesc);
        updateElement('[data-i18n="returns.step4Title"]', t.returns.step4Title);
        updateElement('[data-i18n="returns.step4Desc"]', t.returns.step4Desc);
        updateElement('[data-i18n="returns.step4Process"]', t.returns.step4Process);
        updateElement('[data-i18n="returns.step4Method"]', t.returns.step4Method);
        updateElement('[data-i18n="returns.step4Bank"]', t.returns.step4Bank);
        updateElement('[data-i18n="returns.costDeductionsTitle"]', t.returns.costDeductionsTitle);
        updateElement('[data-i18n="returns.costDeductions1"]', t.returns.costDeductions1);
        updateElement('[data-i18n="returns.costDeductions2"]', t.returns.costDeductions2);
        updateElement('[data-i18n="returns.costDeductions3"]', t.returns.costDeductions3);
        updateElement('[data-i18n="returns.costTitle"]', t.returns.costTitle);
        updateElement('[data-i18n="returns.costReason"]', t.returns.costReason);
        updateElement('[data-i18n="returns.costShipping"]', t.returns.costShipping);
        updateElement('[data-i18n="returns.costReturn"]', t.returns.costReturn);
        updateElement('[data-i18n="returns.costQuality"]', t.returns.costQuality);
        updateElement('[data-i18n="returns.costWrong"]', t.returns.costWrong);
        updateElement('[data-i18n="returns.costTransit"]', t.returns.costTransit);
        updateElement('[data-i18n="returns.costRemorse"]', t.returns.costRemorse);
        updateElement('[data-i18n="returns.costOrdering"]', t.returns.costOrdering);
        updateElement('[data-i18n="returns.costCustoms"]', t.returns.costCustoms);
        updateElements('[data-i18n="returns.costWePay"]', t.returns.costWePay);
        updateElements('[data-i18n="returns.costBuyerPay"]', t.returns.costBuyerPay);
        updateElements('[data-i18n="returns.costBuyerFee"]', t.returns.costBuyerFee);
        updateElement('[data-i18n="returns.exchangeTitle"]', t.returns.exchangeTitle);
        updateElement('[data-i18n="returns.exchangeDesc"]', t.returns.exchangeDesc);
        updateElement('[data-i18n="returns.exchangeInstruction"]', t.returns.exchangeInstruction);
        updateElement('[data-i18n="returns.exchange1"]', t.returns.exchange1);
        updateElement('[data-i18n="returns.exchange2"]', t.returns.exchange2);
        updateElement('[data-i18n="returns.exchange3"]', t.returns.exchange3);
        updateElement('[data-i18n="returns.cancelTitle"]', t.returns.cancelTitle);
        updateElement('[data-i18n="returns.cancelDesc"]', t.returns.cancelDesc);
        updateElement('[data-i18n="returns.cancel1"]', t.returns.cancel1);
        updateElement('[data-i18n="returns.cancel2"]', t.returns.cancel2);
        updateElement('[data-i18n="returns.cancelContact"]', t.returns.cancelContact);
        updateElement('[data-i18n="returns.disputeTitle"]', t.returns.disputeTitle);
        updateElement('[data-i18n="returns.disputeDesc"]', t.returns.disputeDesc);
        updateElement('[data-i18n="returns.dispute1"]', t.returns.dispute1);
        updateElement('[data-i18n="returns.dispute2"]', t.returns.dispute2);
        updateElement('[data-i18n="returns.dispute3"]', t.returns.dispute3);
        updateElement('[data-i18n="returns.contactTitle"]', t.returns.contactTitle);
        updateElement('[data-i18n="returns.contactDesc"]', t.returns.contactDesc);
        updateElement('[data-i18n="returns.contactEmail"]', t.returns.contactEmail);
        updateElement('[data-i18n="returns.contactWhatsapp"]', t.returns.contactWhatsapp);
        updateElement('[data-i18n="returns.contactHours"]', t.returns.contactHours);
        updateElement('[data-i18n="returns.contactHoursValue"]', t.returns.contactHoursValue);
        updateElement('[data-i18n="returns.contactAddress"]', t.returns.contactAddress);
        updateElement('[data-i18n="returns.contactAddressValue"]', t.returns.contactAddressValue);
        updateElement('[data-i18n="returns.updateTitle"]', t.returns.updateTitle);
        updateElement('[data-i18n="returns.updateDesc"]', t.returns.updateDesc);
        updateElement('[data-i18n="returns.effectiveDate"]', t.returns.effectiveDate);
        updateElement('[data-i18n="returns.effectiveDateValue"]', t.returns.effectiveDateValue);
    }
}

function updateElement(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = text;
}

function updateElements(selector, text) {
    document.querySelectorAll(selector).forEach(el => el.innerHTML = text);
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

// Expose functions to global scope
window.addToCart = addToCart;
window.setLanguage = setLanguage;
window.setLang = setLanguage; // Alias for HTML onclick handlers