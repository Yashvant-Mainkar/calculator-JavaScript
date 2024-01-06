const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function answer(){
    display.value = eval(display.value)
}
function clearDisplay(){
    display.value = ""
}