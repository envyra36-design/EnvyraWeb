// 1. Lottie animation
const dashboardAnimation = lottie.loadAnimation({
  container: document.getElementById('lottie-dashboard'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie' // Ejemplo: gráfico animado tipo dashboard
});

// 2. Animación de texto con GSAP
gsap.from(".hyperqual-text h1", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "bounce.out"
});

gsap.from(".hyperqual-text p", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out"
});

// 3. Pequeña animación de entrada para la animación Lottie
gsap.from("#lottie-dashboard", {
  duration: 2,
  scale: 0,
  opacity: 0,
  ease: "elastic.out(1, 0.5)"
});
