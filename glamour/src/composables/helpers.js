function goToTopSmoothly() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export { goToTopSmoothly };