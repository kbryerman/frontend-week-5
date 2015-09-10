/*

  Your Javascript here

*/

function createCheckbox() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var checkboxValue = getInputValue();
    checkbox.value = checkboxValue;
    var label = document.createElement("li");
    label.innerText = checkboxValue;
    var ul = document.getElementsByTagName("ul");
    label.appendChild(checkbox);
    ul[0].appendChild(label);
};

document.querySelector('.toDoInput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      e.preventDefault();
      createCheckbox();
      clearCheckboxValue();
    };
});

var getInputValue = function() {
    var inputField = document.getElementsByClassName('toDoInput');
    var inputValue = inputField[0].value;
    return inputValue
};

var clearCheckboxValue = function() {
    var inputField = document.getElementsByClassName('toDoInput');
    inputField[0].value = "";
};


