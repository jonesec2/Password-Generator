// Creates collapsable container //
var collapsable = document.getElementsByClassName("contentToggle");
var i;

for (i = 0; i < collapsable.length; i++) {
  collapsable[i].addEventListener("click", function () {
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
function changeButton() {
  var elem = document.getElementById("buttonOne");
  if (elem.value == "Configure your settings") elem.value = "Let's make a password";
  else elem.value = "Configure your settings";
}

// Sliders
var slider = document.getElementById("slider");
var output = document.getElementById("f");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
}

//declare character arrays
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCase = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numberCase = "0123456789";

// password logic
function generatePassword() {
  // create global variable for variables to concatenate
  var characters = ""
  //checks value of slider for character length
  let length = document.getElementById("slider").value;

  // checks if sliders are checked
  if (document.getElementById("onUpper").checked) {
    characters = characters + upperCase;
  }
  if (document.getElementById("onLower").checked) {
    characters = characters + lowerCase;
  }
  if (document.getElementById("onSpecial").checked) {
    characters = characters + specialCase;
  }
  if (document.getElementById("onNumber").checked) {
    characters = characters + numberCase;
  }
  // checks if no sliders are checked and alerts
  if (characters.length === 0) {
    alert("Pick something please");
    //must return value if none are checked
    return;
  }

  // var is set for password
  let password = ""

  // letters from global character are selected at random
  for (var i = 0; i < length; i++) {
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }
  // add password to page
  document.getElementById("passwordComplete").value = password;
}

// copy to clipboard
function copyClipboard() {
  var copyText = document.getElementById("passwordComplete");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  // let's user know password was copied
  alert("Copied the text: " + copyText.value);
}