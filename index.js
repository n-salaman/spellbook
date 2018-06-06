const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const castSpeed = f.castSpeed.value

  const spellsDiv = document.querySelector('#spells')

  const div = document.createElement("div")
  div.textContent=spellName
  document.getElementById("spells").appendChild(div)
  
  const div2 = document.createElement("div")
  div2.textContent=`-${castSpeed} magic seconds`
  document.getElementById("spells").appendChild(div2)

  f.reset()
}

/*const spellSpan = function(spellName) {
    const spellS
}*/

form.addEventListener('submit', changeHeading)




