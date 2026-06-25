(() => {
  const hero = document.querySelector('.hero');
  const copy = document.querySelector('.hero-copy');
  if (!hero || !copy) return;

  let progress = 0;
  let locked = true;
  let lastTouchY = 0;

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  function paint() {
    copy.style.transform = `translateY(${progress * 190}px) rotateX(${progress * 42}deg) scale(${1 - progress * 0.28})`;
    copy.style.opacity = String(1 - progress * 0.2);
    hero.classList.toggle('hero-unlocked', progress >= 1);
    locked = progress < 1;
  }

  function step(delta) {
    progress = clamp(progress + delta / 720, 0, 1);
    paint();
  }

  window.addEventListener('wheel', (event) => {
    const atTop = window.scrollY <= 0;
    const rewinding = atTop && progress > 0 && event.deltaY < 0;
    if ((atTop && locked && event.deltaY > 0) || rewinding) {
      event.preventDefault();
      step(event.deltaY);
    }
  }, { passive: false });

  window.addEventListener('touchstart', (event) => {
    lastTouchY = event.touches[0]?.clientY || 0;
  }, { passive: true });

  window.addEventListener('touchmove', (event) => {
    const y = event.touches[0]?.clientY || lastTouchY;
    const delta = lastTouchY - y;
    lastTouchY = y;
    const atTop = window.scrollY <= 0;
    const rewinding = atTop && progress > 0 && delta < 0;
    if ((atTop && locked && delta > 0) || rewinding) {
      event.preventDefault();
      step(delta * 2.4);
    }
  }, { passive: false });

  paint();
})();
