const button = document.querySelector('button')

function changeHead() {
  const heading = document.querySelector('#head2')
  heading.textContent = 'Chapter 1: Potions'
}

button.addEventListener('click', changeHead)


