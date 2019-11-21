var coll = document.getElementsByClassName("content-toggle");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.maxHeight) {
        dropdownContent.style.maxHeight = null;
    } 
    else {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    }
  });
}

function changeButton()
{
    var elem = document.getElementById("buttonOne");
    if (elem.value=="Configure your settings") elem.value = "Let's make a password";
    else elem.value = "Configure your settings";
}

if (dropdownContent.style.display === "block") {
   button.style.text === "Choose";
}