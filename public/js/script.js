function agregarCarrito(producto) {
  alert(producto + " agregado al carrito");
}

// Animación de scroll
const animarItems = document.querySelectorAll('.animar');
window.addEventListener('scroll', () => {
  animarItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      item.classList.add('mostrar');
    }
  });
});

//carrito
function actualizarTotal() {
  const rows = document.querySelectorAll('#carritoItems tr');
  let total = 0;
  rows.forEach(row => {
    const precio = parseFloat(row.cells[1].innerText.replace('$',''));
    const cantidad = parseInt(row.cells[2].children[0].value);
    const totalProducto = precio * cantidad;
    row.cells[3].innerText = '$' + totalProducto;
    total += totalProducto;
  });
  document.getElementById('totalGeneral').innerText = total;
}

// contacto 

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensaje enviado. Gracias por contactarnos!');
  this.reset();
});

// Validación de formulario de login

const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validación básica
  if(email === '' || password === ''){
    errorMsg.textContent = 'Por favor, completa todos los campos.';
    return;
  }

  // Validación simulada
  if(email === 'cliente@demo.com' && password === '123456'){
    alert('¡Bienvenido!');
    window.location.href = 'home.html'; // Redirige a la página principal
  } else {
    errorMsg.textContent = 'Correo o contraseña incorrectos.';
  }
});
