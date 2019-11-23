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

// Slider
var slider = document.getElementById("slider");
var output = document.getElementById("f");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
}

function getUpper() {
  var isChecked = document.getElementById("onUpper").checked;

  if (isChecked === false) {
    ;
  } else {
    var upperCase;
  }
}

function getLower() {
  var isChecked = document.getElementById("onLower").checked;

  if (isChecked === false) {
    ;
  } else {
    var lowerCase;
  }
}

function getNumber() {
  var isChecked = document.getElementById("onNumber").checked;

  if (isChecked === false) {
    ;
  } else {
    var numberCase;
  }
}

function getSpecial() {
  var isChecked = document.getElementById("onSpecial").checked;

  if (isChecked === false) {
    ;
  } else {
    var specialCase;
  }
}

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCase = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numberCase = "0123456789";

// password logic
function generatePassword() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCase = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numberCase = "0123456789";


  let length = document.getElementById("slider").value;

  function getUpper() {
    var isChecked = document.getElementById("onUpper").checked;

    if (isChecked === false) {
      ;
    } else {
      var upperCase;
    }
  }

  function getLower() {
    var isChecked = document.getElementById("onLower").checked;

    if (isChecked === false) {
      ;
    } else {
      var lowerCase;
    }
  }

  function getNumber() {
    var isChecked = document.getElementById("onNumber").checked;

    if (isChecked === false) {
      ;
    } else {
      var numberCase;
    }
  }

  function getSpecial() {
    var isChecked = document.getElementById("onSpecial").checked;

    if (isChecked === false) {
      ;
    } else {
      var specialCase;
    }
  }

  if (getUpper() !== true && getLower() !== true && getNumber() !== true && getSpecial() !== true) {
    var characters = (upperCase + lowerCase + specialCase + numberCase);
  }
  // else if (getLower() !== false && getNumber() !== false && getSpecial() !== false) {
  //   var characters = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz0123456789";
  // }
  //  else if (getUpper() !== false  && getNumber() !== false && getSpecial() !== false) {
  //   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
  // }
  // else if (getUpper() !== false && getLower() !== false  && getSpecial() !== false) {
  //   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz";
  // }
  // else if (getSpecial() !== false && getLower() !== false) {
  //   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz0123456789";
  // }
  // else if (getSpecial() !== false && getLower() !== false) {
  //   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz0123456789";
  // }
  else {
    var characters = "please pick one"
  }

  let password = ""

  for (var i = 0; i < length; i++) {
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }
  // add password to page
  document.getElementById("passwordComplete").value = password;
}




