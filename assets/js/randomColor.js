    function getRandomColor() {
      const letters = '89ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
      return color;
    }

    function applyGradientToBoxes() {
      const boxes = document.querySelectorAll('.colorBox');
      boxes.forEach(box => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const angle = Math.floor(Math.random() * 360);
        box.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

        box.addEventListener('click', () => {
          const newColor1 = getRandomColor();
          const newColor2 = getRandomColor();
          const newAngle = Math.floor(Math.random() * 360);
          box.style.background = `linear-gradient(${newAngle}deg, ${newColor1}, ${newColor2})`;
        });
      });
    }

    applyGradientToBoxes();