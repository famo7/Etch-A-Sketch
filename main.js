const btn = document.querySelector('#btn');

const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  const bool = createGrid(Number(prompt('what size?')));
  etch();
  bool ? (btn.style.display = 'none') : (btn.style.display = 'block');
});

const createGrid = (size) => {
  if (size <= 100) {
    for (let i = 0; i < size; i++) {
      const row = document.createElement('div');
      row.classList.add('row');

      for (let j = 0; j < size; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);
      }
      container.appendChild(row);
    }
    return true;
  } else {
    alert('Size too big!');
    return false;
  }
};

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const etch = () => {
  const divs = document.querySelectorAll('.col');
  divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      if (!e.currentTarget.classList.contains('hovered')) {
        e.currentTarget.style.backgroundColor = generateRandomColor();
        e.currentTarget.classList.add('hovered');
      }
    });
  });
};
