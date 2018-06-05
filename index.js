//check to see when the form is submitted
document.getElementById("frm").addEventListener('submit', changeForm);

//this function changes the first header based on what was entered into form
function changeForm() {
  const x = document.getElementById("frm")
  const text = x.elements[0].value

  document.getElementById("head1").innerHTML = text

}


//checks to see when button is clicked
document.getElementById("butt").addEventListener('click', changeHead);

//changes the 2nd header
function changeHead(){
    const text = "Potions book"
    document.getElementById("head2").innerHTML = text
}




