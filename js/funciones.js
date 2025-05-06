const toggleBtn = document.getElementById('toggleTab');
    const sideTab = document.getElementById('sideTab');

    toggleBtn.addEventListener('click', () => {
      sideTab.classList.toggle('open');
    });