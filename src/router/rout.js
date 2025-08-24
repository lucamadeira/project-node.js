import { Router } from "express";
const router = Router();

 router.get('/', (req, res) => {
   res.render('home.ejs');
});


router.get('/login', (req, res) => {
  res.render('login.ejs', { error: req.query.error });
});

router.get('/home', (req, res) => {
  res.render('productos.ejs');
});

router.get('/contacto', (req, res) => {
  res.render('contacto.ejs');
});

router.get('/carrito', (req, res) => {
  res.render('carrito.ejs');
});

router.get('/sobre', (req, res) => {
  res.render('sobre.ejs');
});

const usuarios = [
  { email: 'cliente@demo.com', password: '123456' }
];

// Cambia GET por POST en la ruta de login
router.post('/login', (req, res) => {
   const { email, password } = req.body;

  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if(usuario){
    res.redirect('home');
  } else {
    res.redirect('/login?error=1');
  }
});

// Array temporal para guardar mensajes (solo para pruebas)
const mensajesContacto = [];

// Ruta para recibir el formulario de contacto
router.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).send('Faltan datos');
  }
  mensajesContacto.push({ nombre, email, mensaje, fecha: new Date() });
  // Puedes guardar en archivo o base de datos aquí si quieres
  res.send('Mensaje recibido');
});

// Ruta para ver los mensajes de contacto (solo para pruebas)
router.get('/mensajes', (req, res) => {
  res.send(
    `<h1>Mensajes de Contacto</h1>` +
    mensajesContacto.map(m =>
      `<div>
        <strong>${m.nombre}</strong> (${m.email})<br>
        <em>${m.fecha.toLocaleString()}</em><br>
        <p>${m.mensaje}</p>
        <hr>
      </div>`
    ).join('')
  );
});


export default router;