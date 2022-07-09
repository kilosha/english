document.addEventListener('DOMContentLoaded', () => {
  let words = [
    { en: 'dive into', ru: 'погрузиться' },
    { en: 'quit', ru: 'увольняться, бросать, покидать' },
    { en: 'abasement', ru: 'унижение' },
    { en: 'simply put', ru: 'проще говоря' },
  ];

  let ul = document.getElementById('input');

  let pairs = words.map((wordPair) => {
    ul.innerHTML += `
      <li>
        ${wordPair.en} - ${wordPair.ru}
      </li>
    `;
  });
});
