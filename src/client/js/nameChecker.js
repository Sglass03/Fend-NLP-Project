function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    
    // This function from https://bobbyhadz.com/blog/javascript-check-if-string-contains-any-letter
    function containsAnyLetter(str) {
        return /[a-zA-Z]/.test(str);
    }

    if (!containsAnyLetter(inputText)) {
        alert("Please enter a text value")
        return false
    }

    return true
}

export { checkForName }
