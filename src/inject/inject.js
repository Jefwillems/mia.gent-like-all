(function() {
  const getElements = () =>
    document.querySelectorAll('a.social-button[data-action="flipLike"]');

  const run = () => {
    getElements().forEach(el => {
      if (!el.classList.contains('liked')) {
        el.click();
        console.log('liked: ', el);
      }
    });
    setTimeout(run, 5000);
  };
  run();
})();
