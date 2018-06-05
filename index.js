const button = document.querySelector('button')

function changeHead() {
  const x = document.getElementById("frm")
  const text = x.elements[0].value

  document.getElementById("head1").innerHTML = text

}

button.addEventListener('click', changeHead)



