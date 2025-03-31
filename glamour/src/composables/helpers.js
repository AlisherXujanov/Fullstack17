function goToTopSmoothly() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function range(start, end = null) {
  if (end === null) {
    end = start
    start = 0
  }
  return Array(end - start).fill().map((_, idx) => start + idx)
}

export { goToTopSmoothly, range };