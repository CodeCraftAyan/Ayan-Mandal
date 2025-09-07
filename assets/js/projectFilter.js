document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const label = button.dataset.label;

    document.querySelectorAll('.project-card').forEach(card => {
      const labels = card.dataset.label.split(",").map(l => l.trim());

      if (label === 'all' || labels.includes(label)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
