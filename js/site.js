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
    for(let i = msg.length - 1; i >= 0; i--){
        let letter = msg[i];
        output += letter
    }
    
    // check to see if msg and output the same forwards and backwards
    if(output.toLowerCase() != msg.toLowerCase()){
        return [false, '']
    }
    else {
        return [true, output];
    }
    // return results of the check AND reversed string 
    
}

function displayResults(results) {
    if(results[0] == true){
        document.getElementById('msg').textContent = `Your message is a palindrome: ${results[1]}`;
        document.getElementById('alert').classList.remove('invisible');
    }
    else{
        document.getElementById('msg').textContent = `Your message is not a palindrome.`;
        document.getElementById('alert').classList.remove('invisible');
    }

}