const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const castSpeed = f.castSpeed.value

  const spellsDiv = document.querySelector('#spells')
  spellsDiv.innerHTML += `<li>${spellName}    ${castSpeed}</li>` 

  

  f.reset()
}

form.addEventListener('submit', changeHeading)




