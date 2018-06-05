document.getElementById("frm").addEventListener('submit', changeHead);

function changeHead() {
  const x = document.getElementById("frm")
  const text = x.elements[0].value

  document.getElementById("head1").innerHTML = text

}

const form = document.querySelector('form')

form.addEventListener('submit')
form.addEvne



/*var input = document.getElementById("newInput")
input.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        alert("hello")
        document.getElementById("butt").click()
    }
})

<button id="butt" onclick="changeHead()">Submit</button>
*/



