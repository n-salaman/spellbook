const form = document.querySelector('form')

const spellSpan = function(spellName) {
    const spellSpn = document.createElement("SPAN")
    spellSpn.textContent = spellName
    spellSpn.setAttribute('class', 'spell')
    document.getElementById("spells").appendChild(spellSpn)
    document.getElementById("spells").appendChild(document.createElement("br"))
}

const castSpan = function(castSpeed) {
    const castSpn = document.createElement("SPAN")
    castSpn.textContent = `-${castSpeed} magic seconds`
    castSpn.setAttribute('class', 'cast')
    document.getElementById("spells").appendChild(castSpn)
    document.getElementById("spells").appendChild(document.createElement("br"))
}

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const castSpeed = f.castSpeed.value

 

  spellSpan(spellName)

  castSpan(castSpeed)

  f.reset()
}



form.addEventListener('submit', changeHeading)




