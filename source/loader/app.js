addEventListener('resize', () => {
    const width = innerWidth;
  
    if (width < 768) {
      document.querySelector('.custom-loader').style.display = 'none';
      document.querySelector('.sec').style.display = 'flex';
    } else {
      document.querySelector('.custom-loader').style.display = 'flex';
      document.querySelector('.sec').style.display = 'none';
    }
  });