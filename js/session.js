// =============================================
// REYSCAN — Control de sesión
// Se incluye en todas las páginas después del navbar
// =============================================

(function () {
  const raw = sessionStorage.getItem('reyscan_usuario');

  // Si no hay sesión, redirigir al login
  if (!raw) {
    // Calcular ruta al login según profundidad de la URL
    const depth = (window.location.pathname.match(/\//g) || []).length;
    const prefix = depth <= 2 ? '' : '../';
    window.location.replace(prefix + 'login.html');
    return;
  }

  const usuario = JSON.parse(raw);

  // Inyectar saludo en el navbar una vez cargado el DOM
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Obtener iniciales
    const partes    = usuario.nombre.trim().split(' ');
    const iniciales = partes.length >= 2
      ? (partes[0][0] + partes[1][0]).toUpperCase()
      : partes[0].slice(0, 2).toUpperCase();

    // Crear bloque usuario
    const userBlock = document.createElement('div');
    userBlock.style.cssText = 'display:flex;align-items:center;gap:10px;';
    userBlock.innerHTML = `
      <div style="text-align:right">
        <div style="font-family:Raleway,sans-serif;font-size:12px;font-weight:700;color:#fff;line-height:1">${usuario.nombre}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:2px">${usuario.rut} · ${usuario.hora}</div>
      </div>
      <div style="width:34px;height:34px;border-radius:50%;background:var(--gold,#F5A623);color:var(--navy,#1B3A6B);font-family:Raleway,sans-serif;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer" title="Cerrar sesión" onclick="cerrarSesion()">
        ${iniciales}
      </div>
    `;

    // Reemplazar nav-brand por el bloque usuario
    const brand = navbar.querySelector('.nav-brand');
    if (brand) brand.replaceWith(userBlock);
    else navbar.appendChild(userBlock);
  });
})();

function cerrarSesion() {
  if (confirm('¿Cerrar sesión?')) {
    sessionStorage.removeItem('reyscan_usuario');
    const depth  = (window.location.pathname.match(/\//g) || []).length;
    const prefix = depth <= 2 ? '' : '../';
    window.location.href = prefix + 'login.html';
  }
}
