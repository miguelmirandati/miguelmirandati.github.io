const img = document.querySelector('img');

img.onclick = () => {
  const imgSrc = img.getAttribute('src');

  if (imgSrc === 'images/world-map-vector.png') {
    img.setAttribute('src', 'images/world-map-vector-2.png');
  } else {
    img.setAttribute('src', 'images/world-map-vector.png');
  }
};

const h1 = document.querySelector('h1');
const button = document.querySelector('button');

function setUserName() {
  const name = prompt('Olá, qual o seu nome?');

  if (!name) {
    setUserName();
  } else {
    localStorage.setItem('name', name);
    h1.textContent = `Bem-vinde, ${name}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const name = localStorage.getItem('name');
  h1.textContent = `Bem-vinde, ${name}`;
}

button.onclick = () => {
  setUserName();
};