
// Activa los componentes Bootstrap de ayuda (tooltips y popovers).
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (elemento) {
    new bootstrap.Tooltip(elemento);
  });
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (elemento) {
    new bootstrap.Popover(elemento);
  });

  // Los formularios son demostrativos: muestran un mensaje y no envían datos.
  document.querySelectorAll('.demo-form').forEach(function (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      const mensaje = formulario.querySelector('.form-feedback');
      if (mensaje) mensaje.textContent = '¡Gracias! Tu formulario de demostración se completó correctamente. ♡';
      formulario.reset();
    });
  });
});
