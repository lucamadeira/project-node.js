
// login.js
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const error = params.get('error');
  if(error){
    document.getElementById('errorMsg').textContent = 'Correo o contraseña incorrectos.';
  }
});
