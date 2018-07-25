
//PASSCODE APP
//input passcode checker
//make an app that allows you to punch in a set of numbers
//and then press # to enter the number and check if it is right or not
//after you check, right or wrong, you clear the attempt
$(document).ready(initializeApp);

function initializeApp(){
    $("button").click( handleInput);
    //add a click handler to every button, call "handleInput" when it is clicked
}

var currentPasscode = '';

function handleInput(){
    var passcode = "3109643";
    debugger;
    if ($(this).text() === "#"){
        checkPasscode(passcode);
        if (currentPasscode === passcode){
            displaySuccess();
        } else {
            displayError();
        } currentPasscode = '';
    } else {
        currentPasscode += $(this).text();
        $('#display').text(currentPasscode);
    }
}
//the button that was pressed will be 'this'
//get the text from the button that was pressed
//if the text is "#", see if the number entered was equal to the passcode variable,
//call checkPasscode
//if checkPasscode returns true, pass in the passcode variable as an argument
//call displaySuccess.
//otherwise
//call displayError

//clear the currentPasscode back to its original value
//otherwise
//add the text to the value inside currentPasscode, store the result into currentPasscode
//also change the ID display element's text to be the current value of currentPasscode
function checkPasscode(passcode){
    return currentPasscode === passcode;
    //check if passcode is the same as currentPasscode
    //return true if they are the same
    //return false if they are not
}
function displaySuccess(){
    $('#display').text('SUCCESS').css("color", "green");

    //change the text in #display to be "SUCCESS!" in green
}

function displayError(){
    $('#display').text('Fail').css("color", "red");

    //change the text in #display to be "FAIL!" in red
}













