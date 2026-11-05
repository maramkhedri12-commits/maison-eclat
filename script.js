
// ======================================
// MAISON ÉCLAT — MULTILINGUAL WEBSITE
// English / Français / العربية
// ======================================

const whatsappNumber = "216XXXXXXXX";
let selectedProduct = "";
let currentLanguage = localStorage.getItem("maisonLanguage") || "en";

// ---------- PRODUCT NAMES ----------

const productNames = {
    "The Élise Dress": {
        en: "The Élise Dress",
        fr: "La robe Élise",
        ar: "فستان إليز"
    },
    "The Amara Set": {
        en: "The Amara Set",
        fr: "L'ensemble Amara",
        ar: "طقم أمارا"
    },
    "The Sofia Dress": {
        en: "The Sofia Dress",
        fr: "La robe Sofia",
        ar: "فستان صوفيا"
    }
};

// ---------- TRANSLATIONS ----------

const translations = {
    en: {
        nav: ["Home", "Collection", "Our Story", "Contact"],
        bag: "BAG",
        discover: "Discover",
        heroEyebrow: "THE NEW ERA OF FASHION",
        heroTitle: "A NEW LANGUAGE<br>OF <span>LUXURY.</span>",
        heroDescription: "Where timeless elegance meets modern expression. Discover a world beyond fashion.",
        heroButton: "EXPLORE THE COLLECTION",
        introEyebrow: "A DIFFERENT KIND OF BEAUTY",
        introTitle: "Fashion is more than what you wear.<br><span>It's how you feel.</span>",
        introDescription: "MAISON ÉCLAT creates elegant pieces for women who express their strength through style.",
        collectionEyebrow: "CURATED FOR YOU",
        collectionTitle: "Our Collection",
        collectionDescription: "Discover your next statement piece.",
        categories: [
            ["Dresses", "Elegance in Every Detail"],
            ["Jackets & Blazers", "Powerful Silhouettes"],
            ["Ready to Wear", "Modern Daily Luxury"],
            ["Shoes", "Designed to Make an Entrance"],
            ["Bags & Accessories", "The Finishing Touch"],
            ["Co-ord Sets", "Effortless Sophistication"]
        ],
        discoverLink: "DISCOVER ↗",
        signatureEyebrow: "SELECTED FOR YOU — 2026",
        signatureTitle: "THE SIGNATURE <span>EDIT.</span>",
        signatureDescription: "Exceptional pieces. Unforgettable presence.",
        signatureItems: [
            ["The Evening Muse", "TIMELESS FEMININITY", "01 / THE DRESS"],
            ["The Modern Icon", "CONTEMPORARY ELEGANCE", "02 / THE LOOK"],
            ["The Power Look", "MODERN TAILORING", "03 / THE LOOK"]
        ],
        discoverPiece: "Discover Piece",
        statementEyebrow: "THE MAISON ÉCLAT PHILOSOPHY",
        statementTitle: "BEYOND TRENDS.<br><span>BEYOND ORDINARY.</span>",
        statementDescription: "We believe fashion is an expression of identity. Every detail tells a story. Every silhouette makes a statement.",
        statementLink: "DISCOVER OUR WORLD ↗",
        experienceEyebrow: "CRAFTED WITH INTENTION",
        experienceTitle: "THE ART OF<br><span>BEING DIFFERENT.</span>",
        experienceDescription: "From striking silhouettes to considered details, every creation expresses individuality, confidence and modern elegance.",
        experienceLink: "EXPLORE OUR WORLD ↗",
        worldEyebrow: "WELCOME TO OUR WORLD",
        worldTitle: "MORE THAN<br><span>FASHION.</span>",
        worldDescription: "MAISON ÉCLAT is a celebration of individuality, confidence and timeless sophistication. A universe where every detail matters and every creation has a story.",
        servicesEyebrow: "WHAT WE CREATE",
        servicesTitle: "OUR WORLD OF <span>CREATION.</span>",
        servicesDescription: "Discover the different expressions of MAISON ÉCLAT.",
        services: [
            ["Haute Couture", "Exceptional creations made to leave a lasting impression."],
            ["Ready-to-Wear", "Contemporary essentials designed for modern elegance."],
            ["Personal Styling", "A refined approach to expressing your individuality."]
        ],
        modalDescription: "Discover timeless elegance and exceptional style.",
        sizeLabel: "Choose your size:",
        colorLabel: "Choose your color:",
        orderButton: "Order via WhatsApp",
        addButton: "Add to Shopping Bag",
        bagTitle: "Your Shopping Bag",
        total: "Total:",
        checkout: "Checkout via WhatsApp",
        emptyBag: "Your shopping bag is empty.",
        size: "Size",
        color: "Color",
        quantity: "Quantity",
        remove: "Remove",
        footerTagline: "Elegance Without Limits.",
        footerNote: "A universe of contemporary luxury, timeless elegance and individuality.",
        explore: "EXPLORE",
        contact: "CONTACT",
        email: "Email Us ↗",
        footerCollection: "Our Collection",
        footerStory: "Our Story",
        footerServices: "Our Services",
        footerDiscover: "Discover the Collection",
        footerCrafted: "CRAFTED WITH ELEGANCE",
        whatsappOrder: "Hello MAISON ÉCLAT! I am interested in",
        whatsappCart: "Hello MAISON ÉCLAT! My order:"
    },

    fr: {
        nav: ["Accueil", "Collection", "Notre histoire", "Contact"],
        bag: "PANIER",
        discover: "Découvrir",
        heroEyebrow: "LA NOUVELLE ÈRE DE LA MODE",
        heroTitle: "UN NOUVEAU LANGAGE<br>DU <span>LUXE.</span>",
        heroDescription: "Là où l'élégance intemporelle rencontre l'expression moderne. Découvrez un univers au-delà de la mode.",
        heroButton: "EXPLORER LA COLLECTION",
        introEyebrow: "UNE BEAUTÉ DIFFÉRENTE",
        introTitle: "La mode est plus que ce que vous portez.<br><span>C'est ce que vous ressentez.</span>",
        introDescription: "MAISON ÉCLAT crée des pièces élégantes pour les femmes qui expriment leur force à travers leur style.",
        collectionEyebrow: "SÉLECTIONNÉ POUR VOUS",
        collectionTitle: "Notre Collection",
        collectionDescription: "Découvrez votre prochaine pièce signature.",
        categories: [
            ["Robes", "L'élégance dans chaque détail"],
            ["Vestes & Blazers", "Des silhouettes affirmées"],
            ["Prêt-à-porter", "Le luxe au quotidien"],
            ["Chaussures", "Faites une entrée remarquable"],
            ["Sacs & Accessoires", "La touche finale"],
            ["Ensembles coordonnés", "Une sophistication naturelle"]
        ],
        discoverLink: "DÉCOUVRIR ↗",
        signatureEyebrow: "SÉLECTION POUR VOUS — 2026",
        signatureTitle: "LA SÉLECTION <span>SIGNATURE.</span>",
        signatureDescription: "Des pièces exceptionnelles. Une présence inoubliable.",
        signatureItems: [
            ["La Muse du Soir", "FÉMINITÉ INTEMPORELLE", "01 / LA ROBE"],
            ["L'Icône Moderne", "ÉLÉGANCE CONTEMPORAINE", "02 / LE LOOK"],
            ["L'Allure Puissante", "TAILORING MODERNE", "03 / LE LOOK"]
        ],
        discoverPiece: "Découvrir la pièce",
        statementEyebrow: "LA PHILOSOPHIE MAISON ÉCLAT",
        statementTitle: "AU-DELÀ DES TENDANCES.<br><span>AU-DELÀ DE L'ORDINAIRE.</span>",
        statementDescription: "Nous croyons que la mode est une expression de l'identité. Chaque détail raconte une histoire. Chaque silhouette affirme un style.",
        statementLink: "DÉCOUVRIR NOTRE UNIVERS ↗",
        experienceEyebrow: "CRÉÉ AVEC INTENTION",
        experienceTitle: "L'ART DE<br><span>SE DISTINGUER.</span>",
        experienceDescription: "Des silhouettes remarquables aux détails raffinés, chaque création exprime l'individualité, la confiance et l'élégance moderne.",
        experienceLink: "EXPLORER NOTRE UNIVERS ↗",
        worldEyebrow: "BIENVENUE DANS NOTRE UNIVERS",
        worldTitle: "BIEN PLUS QUE<br><span>LA MODE.</span>",
        worldDescription: "MAISON ÉCLAT célèbre l'individualité, la confiance et le raffinement intemporel. Un univers où chaque détail compte et chaque création raconte une histoire.",
        servicesEyebrow: "NOS CRÉATIONS",
        servicesTitle: "NOTRE UNIVERS DE <span>CRÉATION.</span>",
        servicesDescription: "Découvrez les différentes expressions de MAISON ÉCLAT.",
        services: [
            ["Haute Couture", "Des créations exceptionnelles qui laissent une impression durable."],
            ["Prêt-à-porter", "Des essentiels contemporains conçus pour une élégance moderne."],
            ["Conseil en style", "Une approche raffinée pour exprimer votre personnalité."]
        ],
        modalDescription: "Découvrez une élégance intemporelle et un style exceptionnel.",
        sizeLabel: "Choisissez votre taille :",
        colorLabel: "Choisissez votre couleur :",
        orderButton: "Commander via WhatsApp",
        addButton: "Ajouter au panier",
        bagTitle: "Votre panier",
        total: "Total :",
        checkout: "Commander via WhatsApp",
        emptyBag: "Votre panier est vide.",
        size: "Taille",
        color: "Couleur",
        quantity: "Quantité",
        remove: "Supprimer",
        footerTagline: "L'élégance sans limites.",
        footerNote: "Un univers de luxe contemporain, d'élégance intemporelle et d'individualité.",
        explore: "EXPLORER",
        contact: "CONTACT",
        email: "Nous contacter ↗",
        footerCollection: "Notre Collection",
        footerStory: "Notre histoire",
        footerServices: "Nos services",
        footerDiscover: "Découvrir la collection",
        footerCrafted: "CRÉÉ AVEC ÉLÉGANCE",
        whatsappOrder: "Bonjour MAISON ÉCLAT ! Je suis intéressé(e) par",
        whatsappCart: "Bonjour MAISON ÉCLAT ! Ma commande :"
    },

    ar: {
        nav: ["الرئيسية", "المجموعة", "قصتنا", "اتصل بنا"],
        bag: "الحقيبة",
        discover: "اكتشفي",
        heroEyebrow: "عصر جديد من الأزياء",
        heroTitle: "لغة جديدة<br>من <span>الفخامة.</span>",
        heroDescription: "حيث تلتقي الأناقة الخالدة بالتعبير العصري. اكتشفي عالماً يتجاوز حدود الموضة.",
        heroButton: "اكتشفي المجموعة",
        introEyebrow: "جمال من نوع مختلف",
        introTitle: "الموضة أكثر من مجرد ما ترتدينه.<br><span>إنها ما تشعرين به.</span>",
        introDescription: "تبتكر MAISON ÉCLAT قطعاً أنيقة للمرأة التي تعبّر عن قوتها من خلال أسلوبها.",
        collectionEyebrow: "اختيرت من أجلك",
        collectionTitle: "مجموعتنا",
        collectionDescription: "اكتشفي قطعتك المميزة القادمة.",
        categories: [
            ["فساتين", "الأناقة في كل تفصيل"],
            ["سترات وبلايزر", "تصاميم تعكس القوة"],
            ["أزياء جاهزة", "فخامة يومية عصرية"],
            ["أحذية", "إطلالة لا تُنسى"],
            ["حقائب وإكسسوارات", "اللمسة الأخيرة"],
            ["أطقم متناسقة", "رقيّ بكل بساطة"]
        ],
        discoverLink: "اكتشفي ↗",
        signatureEyebrow: "اختيارات مميزة لكِ — 2026",
        signatureTitle: "مختارات <span>MAISON ÉCLAT.</span>",
        signatureDescription: "قطع استثنائية. حضور لا يُنسى.",
        signatureItems: [
            ["سحر الأمسية", "أنوثة خالدة", "01 / الفستان"],
            ["الأيقونة العصرية", "أناقة معاصرة", "02 / الإطلالة"],
            ["إطلالة القوة", "أناقة بتفصيل عصري", "03 / الإطلالة"]
        ],
        discoverPiece: "اكتشفي القطعة",
        statementEyebrow: "فلسفة MAISON ÉCLAT",
        statementTitle: "ما وراء الصيحات.<br><span>ما وراء المألوف.</span>",
        statementDescription: "نؤمن بأن الموضة تعبير عن الهوية. كل تفصيل يروي حكاية، وكل تصميم يترك بصمته.",
        statementLink: "اكتشفي عالمنا ↗",
        experienceEyebrow: "صُنعت بكل عناية",
        experienceTitle: "فنّ<br><span>الاختلاف.</span>",
        experienceDescription: "من التصاميم اللافتة إلى أدق التفاصيل، تعبّر كل قطعة عن التفرد والثقة والأناقة العصرية.",
        experienceLink: "اكتشفي عالمنا ↗",
        worldEyebrow: "مرحباً بكِ في عالمنا",
        worldTitle: "أكثر من<br><span>مجرد موضة.</span>",
        worldDescription: "تحتفي MAISON ÉCLAT بالتفرد والثقة والرقيّ الخالد. عالم تهتم فيه كل التفاصيل، وتحمل فيه كل قطعة حكاية.",
        servicesEyebrow: "ما نبتكره",
        servicesTitle: "عالمنا من <span>الإبداع.</span>",
        servicesDescription: "اكتشفي مختلف تجليات MAISON ÉCLAT.",
        services: [
            ["الهوت كوتور", "تصاميم استثنائية تترك انطباعاً لا يُنسى."],
            ["الأزياء الجاهزة", "قطع عصرية أساسية صُممت لأناقة يومية."],
            ["تنسيق الإطلالات", "أسلوب راقٍ للتعبير عن شخصيتكِ."]
        ],
        modalDescription: "اكتشفي الأناقة الخالدة والأسلوب الاستثنائي.",
        sizeLabel: "اختاري المقاس:",
        colorLabel: "اختاري اللون:",
        orderButton: "اطلبي عبر واتساب",
        addButton: "أضيفي إلى حقيبة التسوق",
        bagTitle: "حقيبة التسوق",
        total: "المجموع:",
        checkout: "إتمام الطلب عبر واتساب",
        emptyBag: "حقيبة التسوق فارغة.",
        size: "المقاس",
        color: "اللون",
        quantity: "الكمية",
        remove: "حذف",
        footerTagline: "أناقة بلا حدود.",
        footerNote: "عالم من الفخامة المعاصرة والأناقة الخالدة والتفرد.",
        explore: "استكشفي",
        contact: "اتصل بنا",
        email: "راسلينا ↗",
        footerCollection: "مجموعتنا",
        footerStory: "قصتنا",
        footerServices: "خدماتنا",
        footerDiscover: "اكتشفي المجموعة",
        footerCrafted: "صُنعت بأناقة",
        whatsappOrder: "مرحباً MAISON ÉCLAT! أنا مهتمة بـ",
        whatsappCart: "مرحباً MAISON ÉCLAT! هذا طلبي:"
    }
};

// ---------- SAFE TEXT HELPERS ----------

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
}

function setHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
}

// ---------- LANGUAGE SWITCHING ----------

function changeLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;
    localStorage.setItem("maisonLanguage", language);

    const t = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll(".language-switcher button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.language === language
        );
    });

    // Navigation
    document.querySelectorAll(".navbar nav a").forEach((link, index) => {
        if (t.nav[index]) link.textContent = t.nav[index];
    });

    const cartToggle = document.getElementById("cartToggle");
    if (cartToggle) {
        cartToggle.firstChild.textContent = t.bag + " (";
    }

    setText(".nav-button", t.discover);

    // Hero
    setText(".hero .eyebrow", t.heroEyebrow);
    setHTML(".hero h1", t.heroTitle);
    setText(".hero-description", t.heroDescription);
    setText(".hero .gold-button", t.heroButton);

    // Intro
    setText(".intro .eyebrow", t.introEyebrow);
    setHTML(".intro h2", t.introTitle);
    setText(".intro > p:last-child", t.introDescription);

    // Collection
    setText(".section-heading .eyebrow", t.collectionEyebrow);
    setText(".section-heading h2", t.collectionTitle);
    setText(".section-heading > p", t.collectionDescription);

    document.querySelectorAll(".products .product").forEach((card, index) => {
        if (!t.categories[index]) return;

        const title = card.querySelector("h3");
        const description = card.querySelector(".product-info p");
        const link = card.querySelector(".product-info > span");

        if (title) title.textContent = t.categories[index][0];
        if (description) description.textContent = t.categories[index][1];
        if (link) link.textContent = t.discoverLink;
    });

    // Signature collection
    setText(".signature-heading .eyebrow", t.signatureEyebrow);
    setHTML(".signature-heading h2", t.signatureTitle);
    setText(".signature-heading > p:last-child", t.signatureDescription);

    document.querySelectorAll(".signature-card").forEach((card, index) => {
        if (!t.signatureItems[index]) return;

        const title = card.querySelector("h3");
        const description = card.querySelector("p");
        const label = card.querySelector(".signature-image span");
        const button = card.querySelector(".order-button");

        if (title) title.textContent = t.signatureItems[index][0];
        if (description) description.textContent = t.signatureItems[index][1];
        if (label) label.textContent = t.signatureItems[index][2];
        if (button) button.textContent = t.discoverPiece;
    });

    // Statement
    setText(".statement .eyebrow", t.statementEyebrow);
    setHTML(".statement h2", t.statementTitle);
    setText(".statement-description", t.statementDescription);
    setText(".statement-link", t.statementLink);

    // Experience
    setText(".experience .eyebrow", t.experienceEyebrow);
    setHTML(".experience h2", t.experienceTitle);
    setText(".experience-content > p:not(.eyebrow)", t.experienceDescription);
    setText(".experience-content a", t.experienceLink);

    // Our world
    setText(".world .eyebrow", t.worldEyebrow);
    setHTML(".world h2", t.worldTitle);
    setText(".world-content > p:not(.eyebrow):not(.world-signature)", t.worldDescription);

    // Services
    setText(".services-heading .eyebrow", t.servicesEyebrow);
    setHTML(".services-heading h2", t.servicesTitle);
    setText(".services-heading > p:last-child", t.servicesDescription);

    document.querySelectorAll(".service-card").forEach((card, index) => {
        if (!t.services[index]) return;

        setTextInElement(card.querySelector("h3"), t.services[index][0]);
        setTextInElement(card.querySelector("p"), t.services[index][1]);
        setTextInElement(card.querySelector("a"), t.discoverLink);
    });

    // Product modal
    setText(".modal-content > p:not(.eyebrow)", t.modalDescription);

    const labels = document.querySelectorAll(".modal-content label");
    if (labels[0]) labels[0].textContent = t.sizeLabel;
    if (labels[1]) labels[1].textContent = t.colorLabel;

    setText("#modalOrder", t.orderButton);
    setText("#modalAddToCart", t.addButton);

    // Shopping bag
    setText(".cart-header h2", t.bagTitle);
    setHTML(".cart-footer p", `${t.total} <strong id="cartTotal">0 DT</strong>`);
    setText("#checkoutButton", t.checkout);

    // Footer
    setText(".footer-brand > p:first-of-type", t.footerTagline);
    setText(".footer-note", t.footerNote);

    const footerHeadings = document.querySelectorAll(".footer-links h4");
    if (footerHeadings[0]) footerHeadings[0].textContent = t.explore;
    if (footerHeadings[1]) footerHeadings[1].textContent = t.contact;

    const footerLinks = document.querySelectorAll(".footer-links a");
    if (footerLinks.length >= 6) {
        footerLinks[0].textContent = t.nav[0];
        footerLinks[1].textContent = t.footerCollection;
        footerLinks[2].textContent = t.footerStory;
        footerLinks[3].textContent = t.footerServices;
        footerLinks[4].textContent = t.email;
        footerLinks[5].textContent = t.footerDiscover;
    }

    const footerBottom = document.querySelectorAll(".footer-bottom span");
    if (footerBottom[1]) footerBottom[1].textContent = t.footerCrafted;

    updateCart();
}

function setTextInElement(element, value) {
    if (element) element.textContent = value;
}

// Connect language buttons
document.querySelectorAll(".language-switcher button").forEach(button => {
    button.addEventListener("click", function() {
        changeLanguage(this.dataset.language);
    });
});

// ---------- PRODUCT MODAL ----------

const orderButtons = document.querySelectorAll(".order-button");
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const productName = document.getElementById("modalProductName");
const modalOrder = document.getElementById("modalOrder");

orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectedProduct = button.dataset.product;

        productName.textContent =
            productNames[selectedProduct]?.[currentLanguage] || selectedProduct;

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Order directly via WhatsApp
modalOrder.addEventListener("click", function() {
    const size = document.getElementById("productSize").value;
    const color = document.getElementById("productColor").value;
    const translatedName =
        productNames[selectedProduct]?.[currentLanguage] || selectedProduct;

    const messages = {
        en: `${translations.en.whatsappOrder} ${translatedName}, size ${size}, color ${color}.`,
        fr: `${translations.fr.whatsappOrder} ${translatedName}, taille ${size}, couleur ${color}.`,
        ar: `${translations.ar.whatsappOrder} ${translatedName}، المقاس ${size}، اللون ${color}.`
    };

    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[currentLanguage])}`;
    window.open(link, "_blank");
});

// ---------- NAVBAR SCROLL ----------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ---------- REVEAL ON SCROLL ----------

const revealElements = document.querySelectorAll(
    ".intro, .product, .section-heading, .statement"
);

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

// ---------- IMAGE HOVER ----------

document.querySelectorAll(".product-image").forEach(function(image) {
    image.addEventListener("mouseenter", function() {
        image.classList.add("image-hover");
    });

    image.addEventListener("mouseleave", function() {
        image.classList.remove("image-hover");
    });
});

// ---------- SHOPPING BAG ----------

// Keep previously saved items instead of deleting them on every refresh.
let cart = JSON.parse(localStorage.getItem("maisonCart") || "[]");

const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");

function saveCart() {
    localStorage.setItem("maisonCart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const t = translations[currentLanguage];

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(function(item, index) {
        total += item.price * item.quantity;
        count += item.quantity;

        const displayedName =
            productNames[item.name]?.[currentLanguage] || item.name;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${displayedName}</h3>
                    <p>${t.size}: ${item.size} | ${t.color}: ${item.color}</p>
                    <p>${item.price} DT × ${item.quantity}</p>
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})">${t.remove}</button>
                </div>
            </div>
        `;
    });

    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartTotal").textContent = total + " DT";
}

function changeQuantity(index, amount) {
    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

function openCart() {
    cartPanel.classList.add("open");
    cartOverlay.classList.add("open");
}

function closeCart() {
    cartPanel.classList.remove("open");
    cartOverlay.classList.remove("open");
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// ---------- ADD TO SHOPPING BAG ----------

document.getElementById("modalAddToCart").addEventListener("click", function() {
    const name = selectedProduct;

    const prices = {
        "The Élise Dress": 189,
        "The Amara Set": 220,
        "The Sofia Dress": 175
    };

    const size = document.getElementById("productSize").value;
    const color = document.getElementById("productColor").value;

    const existingItem = cart.find(function(item) {
        return item.name === name &&
               item.size === size &&
               item.color === color;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: prices[name] || 0,
            size: size,
            color: color,
            quantity: 1
        });
    }

    saveCart();
    closeCart();
    modal.style.display = "none";
    openCart();
});

// ---------- CHECKOUT ----------

document.getElementById("checkoutButton").addEventListener("click", function() {
    const t = translations[currentLanguage];

    if (cart.length === 0) {
        alert(t.emptyBag);
        return;
    }

    let message = t.whatsappCart + "\n";

    cart.forEach(function(item) {
        const translatedName =
            productNames[item.name]?.[currentLanguage] || item.name;

        message += `${translatedName} | ${t.size}: ${item.size} | ${t.color}: ${item.color} | ${t.quantity}: ${item.quantity} | ${item.price * item.quantity} DT\n`;
    });

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    message += `${t.total} ${total} DT`;

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});

// ---------- START WEBSITE ----------

updateCart();
changeLanguage(currentLanguage);
