function isPalindrome(str) {
    let fraseWithoutSpace = str.toLowerCase().replace(/ /g, "");

    for (let i = 0; i < parseInt(fraseWithoutSpace.length / 2); i++) {
        if (fraseWithoutSpace[i] !== fraseWithoutSpace[fraseWithoutSpace.length - 1 - i]) {
            return false; 
        }
    }

    return true; 
}


function arrayMaxMin(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [ min, max ];
}
console.log (arrayMaxMin([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))
