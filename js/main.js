const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let sumChar = "";
    
    for (let i = cleanStr.length - 1; i>= 0; i--) {
        sumChar += cleanStr[i];
    };

    if (cleanStr === sumChar) {
        result.textContent = `${str} is a palindrome`;
        console.log("good")
    } else {
        result.textContent =  `${str} is not a palindrome.`
        console.log("bad")
    };
};

button.addEventListener("click", () => {
    const inputResult = input.value.trim();

    if (!inputResult) {
        alert("Please input a value");
        return;
    }

   isPalindrome(inputResult);
});

