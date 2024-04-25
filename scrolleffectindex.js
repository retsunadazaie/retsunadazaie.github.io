const letters = document.querySelectorAll('.letter');
  const meaningDisplay = document.getElementById('meaning');

  letters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
      const meaning = letter.getAttribute('data-meaning');
      meaningDisplay.textContent = meaning;
      meaningDisplay.classList.add('show');
    });

    letter.addEventListener('mouseout', () => {
      meaningDisplay.classList.remove('show');
    });
  });