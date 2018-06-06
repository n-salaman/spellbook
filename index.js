const form = document.querySelector('form')

/*const spellSpan = function(spellName) {
    const spellSpn = document.createElement("SPAN")
    spellSpn.textContent = spellName
    spellSpn.setAttribute('class', 'spell')
    document.getElementById("spells").appendChild(spellSpn)
}*/

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const castSpeed = f.castSpeed.value

  //const spellsDiv = document.querySelector('#spells')

  const spellSpn = document.createElement("SPAN")
  spellSpn.textContent = spellName
  spellSpn.setAttribute('class', 'spell')
  document.getElementById("spells").appendChild(spellSpn)

  document.getElementById("spells").appendChild(document.createElement("br"))

  const castSpn = document.createElement("SPAN")
  castSpn.textContent = `-${castSpeed} magic seconds`
  castSpn.setAttribute('class', 'cast')
  document.getElementById("spells").appendChild(castSpn)
  
  /*const div2 = document.createElement("div")
  div2.textContent=`-${castSpeed} magic seconds`
  document.getElementById("spells").appendChild(div2)*/

  f.reset()
}



form.addEventListener('submit', changeHeading)




