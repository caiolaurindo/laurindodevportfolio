// LOADER
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 2200);
  });
 
  // CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width = '20px'; cursor.style.height = '20px'; ring.style.width = '56px'; ring.style.height = '56px'; ring.style.opacity = '0.8'; });
    el.addEventListener('mouseleave', () => { cursor.style.width = '12px'; cursor.style.height = '12px'; ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '0.5'; });
  });
 
  // SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // animate skill bars
        e.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('animate'));
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
 
  // SKILL BAR WIDTHS
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const w = getComputedStyle(bar).getPropertyValue('--w') || '0.7';
    bar.style.width = (parseFloat(w) * 100) + '%';
  });
 
  // FORM
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'ENVIADO ✓';
    btn.style.background = '#0b0469';
    setTimeout(() => { btn.textContent = 'ENVIAR MENSAGEM'; btn.style.background = ''; }, 3000);
  });