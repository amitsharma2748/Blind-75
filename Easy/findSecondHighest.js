// node findSecondHighest.js

const findSecondHighest=(arr)=>{
    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (let num of arr) {
        if (num > highest) {
            secondHighest = highest; // Move current highest to second
            highest = num; // Update highest
        } else if (num < highest && num > secondHighest) {
            secondHighest = num; // Update second highest if num is between highest and secondHighest
        }
    }

    return secondHighest === -Infinity ? null : secondHighest;
}

console.log(findSecondHighest([5, 2, 8, 1, 9, 3])); // 8