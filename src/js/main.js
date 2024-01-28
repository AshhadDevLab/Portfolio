function scrollToPosition(y) {
  window.scrollTo(0, y);
}

function scrollToPosition() {
  const scrollContainer = document.documentElement || document.body;
  const currentPosition = scrollContainer.scrollLeft;

  let targetPosition;

  if (currentPosition === 0) {
    targetPosition = 3578;
  } else {
    targetPosition = 0;
  }

  const distance = targetPosition - currentPosition;
  const duration = 2000; // Adjust the duration as needed
  let startTime = null;

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    scrollContainer.scrollLeft = easeInOut(elapsed, currentPosition, distance, duration);

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animateScroll);
}