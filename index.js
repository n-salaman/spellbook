const button = document.querySelector('button')

const update1 = function() {
    const heading = document.querySelector('h1')
    heading.textContent = 'Spellbook 2'

}


const button = document.querySelector('button')

const sayContents = function() {
  const heading = document.querySelector('h1')
  heading.textContent = 'I <3 JavaScript'
}

button.addEventListener('click', sayContents)

sayContents()
