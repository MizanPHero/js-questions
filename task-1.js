const reverseString = (inputString) => {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.charAt(i);
    }
    console.log(reversedString);
}
const inputString = "hello world";
reverseString(inputString);
