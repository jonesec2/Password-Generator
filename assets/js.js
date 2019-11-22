// Creates collapsable container //
var coll = document.getElementsByClassName("content-toggle");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropDownContent = this.nextElementSibling;
    if (dropDownContent.style.maxHeight) {
        dropDownContent.style.maxHeight = null;
    } 
    else {
        dropDownContent.style.maxHeight = dropDownContent.scrollHeight + "px";
    }
  });
}

// Changes the text of the main "Password" container //
function changeButton()
{
    var elem = document.getElementById("buttonOne");
    if (elem.value=="Configure your settings") elem.value = "Let's make a password";
    else elem.value = "Configure your settings";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
// if (dropdownContent.style.display === "block") {
//    button.style.text === "Choose";
// }

