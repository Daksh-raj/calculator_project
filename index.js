let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let screenvalue = "";
for (let item of button) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenvalue += buttonText;
      input.value = screenvalue;
    } else if (buttonText == "AC") {
      screenvalue = "";
      input.value = "";
    } 
    else if (buttonText == "=") {
      input.value = eval(screenvalue);
    } else {
      screenvalue += buttonText;
      input.value= screenvalue;
    }
  });
}
