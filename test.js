function palindrome(str) {
    let newStr = "";

    let len = str.length;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        console.log(str[i], str[len - i - 1]);

        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const value = palindrome("malayal");
console.log(value);