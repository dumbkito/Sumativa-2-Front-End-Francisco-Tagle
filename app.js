// 1. Datos iniciales: 9 Experiencias
let experiences = [
    { id: 1, title: "Cata de Vinos Premium", price: 35000, category: "Gastronomía", author: "admin" },
    { id: 2, title: "Trekking Cajón del Maipo", price: 28000, category: "Naturaleza", author: "admin" },
    { id: 3, title: "Tour Murales Valparaíso", price: 15000, category: "Cultura", author: "admin" },
    { id: 4, title: "Surf en Pichilemu", price: 32000, category: "Aventura", author: "admin" },
    { id: 5, title: "Cena en el Desierto", price: 85000, category: "Gastronomía", author: "admin" },
    { id: 6, title: "Observación Estelar", price: 22000, category: "Naturaleza", author: "admin" },
    { id: 7, title: "Taller de Alfarería", price: 18000, category: "Cultura", author: "admin" },
    { id: 8, title: "Parapente en la Costa", price: 65000, category: "Aventura", author: "admin" },
    { id: 9, title: "Ruta de los Museos", price: 10000, category: "Cultura", author: "admin" }
];

let currentUser = null;
let cart = [];

const sanitize = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
};

// 2. Renderizado con Carrusel de Imágenes
const renderCards = () => {
    const grid = document.getElementById('experience-grid');
    grid.innerHTML = "";
    
    experiences.forEach((exp, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Creamos 3 imágenes por tarjeta para el carrusel
        const images = [
            `https://loremflickr.com/400/400/${exp.category.toLowerCase()}?lock=${exp.id}1`,
            `https://loremflickr.com/400/400/${exp.category.toLowerCase()}?lock=${exp.id}2`,
            `https://loremflickr.com/400/400/travel?lock=${exp.id}3`
        ];

        let deleteBtn = (currentUser && exp.author === currentUser) ? 
            `<button class="delete-btn" onclick="removeExperience(${exp.id})">Eliminar mi publicación</button>` : "";

        card.innerHTML = `
            <div class="card-image" id="carousel-${exp.id}">
                <img src="${images[0]}" class="active">
                <img src="${images[1]}">
                <img src="${images[2]}">
            </div>
            <div class="card-content">
                <span class="category-tag">${exp.category}</span>
                <h3>${sanitize(exp.title)}</h3>
                <p>Desde <strong>$${exp.price.toLocaleString()}</strong></p>
                
                <button class="btn-reserve" onclick="addToCart(${exp.id})">
                    Reservar experiencia
                </button>
                
                ${deleteBtn}
            </div>
        `;
        grid.appendChild(card);
    });
    startGlobalCarousel();
};

// 3. Lógica de Carrusel Encadenado
// Cada tarjeta cambia su foto una tras otra
const startGlobalCarousel = () => {
    let currentCardIndex = 0;
    
    setInterval(() => {
        const carousels = document.querySelectorAll('.card-image');
        if (carousels.length === 0) return;

        const currentCarousel = carousels[currentCardIndex];
        const imgs = currentCarousel.querySelectorAll('img');
        let activeImgIndex = Array.from(imgs).findIndex(img => img.classList.contains('active'));
        
        // Quitar active a la actual
        imgs[activeImgIndex].classList.remove('active');
        
        // Siguiente imagen en esa tarjeta
        let nextImgIndex = (activeImgIndex + 1) % imgs.length;
        imgs[nextImgIndex].classList.add('active');

        // Mover el índice a la siguiente tarjeta para el próximo intervalo
        currentCardIndex = (currentCardIndex + 1) % carousels.length;
    }, 2000); // Cambia una foto de alguna tarjeta cada 2 segundos
};

// 4. Gestión de Sesión
const loginForm = document.getElementById('login-form');
loginForm.onsubmit = (e) => {
    e.preventDefault();
    currentUser = document.getElementById('login-email').value.split('@')[0];
    document.getElementById('current-user').textContent = `Usuario: ${currentUser}`;
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('btn-login-modal').style.display = 'none';
    document.getElementById('btn-register-modal').style.display = 'none';
    document.getElementById('exp-form').style.display = 'grid';
    document.getElementById('login-warning').style.display = 'none';
    renderCards();
};

// Botón Olvidó Contraseña
document.getElementById('forgot-pass').onclick = () => alert("Se ha enviado un enlace de recuperación a tu correo.");

// Modales
document.getElementById('btn-login-modal').onclick = () => document.getElementById('login-modal').style.display = 'block';
document.getElementById('btn-register-modal').onclick = () => alert("Función de registro: Por favor usa el Login para esta demo.");
document.getElementById('close-login').onclick = () => document.getElementById('login-modal').style.display = 'none';

// CRUD y Carrito (Lógica básica)
window.removeExperience = (id) => {
    experiences = experiences.filter(e => e.id !== id);
    renderCards();
};

window.addToCart = (id) => {
    const item = experiences.find(e => e.id === id);
    cart.push(item);
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = cart.reduce((s, i) => s + i.price, 0).toLocaleString();
    document.getElementById('cart-sidebar').style.right = '0';
};

document.getElementById('btn-cart').onclick = () => document.getElementById('cart-sidebar').style.right = '0';
document.getElementById('close-cart').onclick = () => document.getElementById('cart-sidebar').style.right = '-350px';

// Carga Inicial
renderCards();