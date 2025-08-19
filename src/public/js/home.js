// Animaciones al scroll
const elementos = document.querySelectorAll('.servicio, .galeria-img, .testimonio');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom){
      el.classList.add('mostrar');
    }
  });
});

// Formulario contacto
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    if(nombre === '' || email === '' || mensaje === ''){
      alert('Por favor, completa todos los campos.');
      return;
    }
    // Enviar datos al backend
    const res = await fetch('/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ nombre, email, mensaje })
    });
    if(res.ok){
      alert(`Gracias ${nombre}, tu mensaje ha sido enviado!`);
      form.reset();
    } else {
      alert('Hubo un error al enviar el mensaje.');
    }
  });
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ target.scrollIntoView({behavior:'smooth'}); }
  });
});

