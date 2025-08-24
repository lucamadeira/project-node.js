// =======================
// SWIPER / COLECCIONES
// =======================
const swiper = new Swiper('.colecciones-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// =======================
// ANIMACIONES AL SCROLL
// =======================
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.coleccion, .producto-card, .beneficio, .testimonio');
  const windowBottom = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowBottom - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'all 0.6s ease-out';
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Inicializar opacidad y transform para animación
document.querySelectorAll('.coleccion, .producto-card, .beneficio, .testimonio').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
});

// =======================
// CARRITO DE COMPRAS
// =======================
let carrito = [];

const updateCart = () => {
  console.log("Carrito:", carrito);
  alert(`Tienes ${carrito.length} producto(s) en el carrito.`);
};

document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.producto-card');
    const nombre = card.querySelector('h3').innerText;
    const precio = card.querySelector('p').innerText;
    carrito.push({ nombre, precio });
    updateCart();
  });
});

// =======================
// FILTRO DE PRODUCTOS POR COLECCION
// =======================
const filterProducts = (coleccion) => {
  const productos = document.querySelectorAll('.producto-card');
  productos.forEach(producto => {
    if(coleccion === 'all' || producto.dataset.coleccion === coleccion) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
};
