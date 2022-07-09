document.addEventListener('DOMContentLoaded', () => {
  let words = [
    { en: 'dive into', ru: 'погрузиться' },
    { en: 'quit', ru: 'увольняться, бросать, покидать' },
    { en: 'abasement', ru: 'унижение' },
    { en: 'simply put', ru: 'проще говоря' },
  ];

  let div = document.getElementById('input');

  let pairs = words.map(wordPair => {
    let div = document.createElement('div');
    div.innerHTML = `${wordPair.en} - ${wordPair.ru}`;
    return div;
  })

  pairs.forEach(pair => div.append(pair));
});