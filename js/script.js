/* CURSOR */
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animateCursor() {
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    /* SCROLL REVEAL */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    /* SKILL BARS */
    const bars = document.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.w + '%';
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(b => barObserver.observe(b));

    /* CONTACT FORM (Demo) */
    function submitForm() {
      const name  = document.getElementById('fname').value.trim();
      const email = document.getElementById('femail').value.trim();
      const msg   = document.getElementById('fmsg').value.trim();
      const msgEl = document.getElementById('formMsg');
      if (!name || !email || !msg) {
        msgEl.textContent = '⚠ Merci de remplir tous les champs.';
        msgEl.style.color = '#ff8080';
        msgEl.style.display = 'block';
        return;
      }
      msgEl.textContent = '✦ Message envoyé ! Je vous répondrai rapidement.';
      msgEl.style.color = 'var(--pink-glow)';
      msgEl.style.display = 'block';
      document.getElementById('fname').value = '';
      document.getElementById('femail').value = '';
      document.getElementById('fmsg').value = '';
    }

    /* ACTIVE NAV */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
          ? 'var(--pink-glow)' : '';
      });
    });