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
    // variable created for output
    let output = '';
    
    
    // for loop to run through all characters of a string
    for(let i = msg.length - 1; i >= 0; i--){
        let letter = msg[i];
        output += letter
    }
    
    // check to see if msg and output the same forwards and backwards regardless of spaces or Capital letters or special characters
    // return results of the check AND the reversed string 
    if(output.toLowerCase().split(' ').join('').replace(/[^a-zA-Z0-9 ]/g, '') != msg.toLowerCase().split(' ').join('').replace(/[^a-zA-Z0-9 ]/g, '')){
        return [false, output]
    }
    else {
        return [true, output];
    } 
}

// displays the result
function displayResults(results) {
    // if result return as "TRUE"
    if(results[0] == true){
        document.getElementById('msg').textContent = `Your message IS a palindrome: ${results[1]}`;
        document.getElementById('alert').classList.remove('invisible');
    }
    // If the result returns as "FALSE"
    else{
        document.getElementById('msg').textContent = `Your message IS NOT a palindrome: ${results[1]}`;
        document.getElementById('alert').classList.remove('invisible');
    }

}