const doctorCircles = document.querySelectorAll('.doctor-circle');

doctorCircles.forEach(circle => {
  const name = circle.querySelector('.doctor-name');
  const menu = circle.querySelector('.circle-menu');

  name.addEventListener('click', (event) => {
    // إذا كانت القائمة مخفية، تظهر
    event.stopPropagation(); // لمنع إخفاء القائمة عند الضغط على الدائرة نفسها
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }

    // إخفاء القوائم الأخرى
    const otherMenus = document.querySelectorAll('.circle-menu');
    otherMenus.forEach(otherMenu => {
      if (otherMenu !== menu) {
        otherMenu.style.display = 'none';
      }
    });
  });

  // إخفاء القائمة عند النقر خارجها
  document.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
