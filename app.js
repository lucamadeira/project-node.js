import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Para __dirname en ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'home.html'));
});
// Sirve el formulario de login en /login (GET)
app.get('/login', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'login.html'));
});

// Servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Middleware para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

const usuarios = [
  { email: 'cliente@demo.com', password: '123456' }
];

// Cambia GET por POST en la ruta de login
app.post('/login', (req, res) => {
   const { email, password } = req.body;

  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if(usuario){
    // Redirige a la página de home si es correcto
    res.redirect('./index.html');
  } else {
    // Si no es correcto, vuelve al login con un query string de error
    res.redirect('/login.html?error=1');
  }
});

// Array temporal para guardar mensajes (solo para pruebas)
const mensajesContacto = [];

// Ruta para recibir el formulario de contacto
app.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).send('Faltan datos');
  }
  mensajesContacto.push({ nombre, email, mensaje, fecha: new Date() });
  // Puedes guardar en archivo o base de datos aquí si quieres
  res.send('Mensaje recibido');
});

// Ruta para ver los mensajes de contacto (solo para pruebas)
app.get('/mensajes', (req, res) => {
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


const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
