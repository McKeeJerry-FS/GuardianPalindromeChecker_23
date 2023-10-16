function getValues() {
    // get the text out of input and assign to a variable
    let msg = document.getElementById('userInput').value;

    // check to make sure input is not empty
    if(msg.length == 0) {
        Swal.fire(
            {
                icon: 'error',
                backdrop: false,
                title: 'Oops',
                text: 'Please enter in a message'
            });
    }
    else {
        // send the input to be checked if it is a palindrome
        let results = checkForPalindrome(msg);
        // send results to be displayed
        displayResults(results);
    }   
}

function checkForPalindrome(msg) {
    
    let output = '';

    // for loop
    for(let i = msg.length - 1; 1 >= 0; i--){
        let letter = msg[i];
        output += letter
    }

    return output;


}

function displayResults(results) {

}