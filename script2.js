// Medium problems

// 1. add5

var num = 10;
function addFive(num) {
    console.log(num + 5)
}
var result = addFive(num)


// 2. get opposite
var num = 5;
function getOpposite(num) {
    console.log(num * -1)
}
var result = getOpposite(num)


// 3. to seconds

var min = 5;
function toSeconds(min) {
    console.log(min * 60)
}
var secs = toSeconds(min)

// 4. to integer
var mystr = "5";
function toInteger(mystr) {
    console.log(parseInt(mystr))
}
var myint = toInteger(mystr)

// 5. next number

var myint = 11;
function nextNumber(myint) {
    console.log(myint + 1)
}
var myNextint = nextNumber(myint)

// 6. get first elements

var arr = [1, 2, 3];
function getFirstElement(arr) {
    console.log(arr[0])
}
var data = getFirstElement(arr)


// 7. hour to seconds

var arr = [2, 10, 24];
function hourToSeconds(arr) {
    let secs = []
    arr.forEach(ele => secs.push(ele * 60 * 60))
    console.log(secs)
}
var data = hourToSeconds(arr)

// 8. find perimeter
function findPerimeter(num1, num2) {
    console.log(2 * (num1 + num2))
}
var peri = findPerimeter(6, 7)

// 9. less than 100
function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        console.log(true)
    } else {
        console.log(false)
    }
}
var res = lessThan100(22, 15)

// 10. remainder

function remainder(num1, num2) {
    console.log(num1 % num2)
}
var res = remainder(5, 10)


// 11. count animal legs

function CountAnimals(tur, horse, pigs) {
    let totalLegs = tur * 2 + horse * 4 + pigs * 4
    console.log(totalLegs)
}
var legs = CountAnimals(2, 3, 5)

// 12. frames per second

function frames(num1, num2) {
    console.log(num1 * 60 * num2)
}
var fps = frames(10, 25)


//13.  divisible by 5
function divisibleByFive(num1) {
    num1 % 5 === 0 ? console.log(true) : console.log(false)
}
var divisible = divisibleByFive(5)

// 14. is even
function isEven(num) {
    num % 2 === 0 ? console.log(true) : console.log(false)
}
var even = isEven(5)


// 15. areBothOdd

function areBothOdd(num1, num2) {
    num1 % 2 !== 0 && num2 % 2 !== 0 ? console.log(true) : console.log(false)
}

var odd = areBothOdd(4, 25)

// 16. get full name
function getFullName(firstName, lastName) {
    console.log(firstName + lastName)
}

var fullName = getFullName("Dhinesh", "MS")


// 17. get length of the word
function getLengthOfWord(word1) {
    console.log(word1.length)
}
var length = getLengthOfWord("hero")


// 18 is same length
function isSameLength(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    len1 === len2 ? console.log(true) : console.log(false)
}
var sameLength = isSameLength("guvi", "geek")


// 19. distance between the two points
function getDistance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a * a + b * b);
    return Math.floor(c)
}

console.log(getDistance(100, 100, 400, 300))


// 20. get nth element
function getNthElement(array, n) {
    console.log(array[n])
}
var nthEle = getNthElement([1, 3, 5], 1)

// 21. get last element
function getLastElement(array) {
    console.log(array[array.length - 1])
}
var nthEle = getLastElement([1, 2, 3, 4])


// 22. get property of object
var obj = {
    mykey: 'value'
};

function getProperty(obj, key) {
    console.log(obj[key])
}
var prop = getProperty(obj, 'mykey')


// 23. add property to function

var obj = {
    mykey: "value"
};
function addProperty(obj, key) {
    obj[key] = true
    console.log(obj)
}
var newProp = addProperty(obj, "mykey")


// 24. remove property from object

var obj = {
    name: "dhinesh"
};
function removeProperty(obj, key) {
    delete obj[key]
    console.log(obj[key])
}
removeProperty(obj, "name")

// 25. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
    let countPositives = 0
    let sumNegative = 0
    arr.forEach(ele => {
        if (ele > 0) {
            countPositives++
        } else {
            sumNegative += ele
        }
    })
    return [countPositives, sumNegative]
}
var ar2 = countPositivesSumNegatives(arr)
console.log(ar2)


// 26. Return an array, only the positive
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function onlyPositives(arr) {
    let positives = []
    arr.forEach(ele => {
        if (ele > 0) {
            positives.push(ele)
        }
    })
    return positives
}
var ar2 = onlyPositives(arr)
console.log(ar2)


// 27. return powers of 2
function powersOfTwo(n) {
    let res = []
    for (let i = 0; i <= n; i++) {
        res.push(2 ** i)
    }
    return res;
}

console.log(powersOfTwo(2))


// 28. max in an array

function findMax(ar) {
    ar.sort((a, b) => b - a)
    return ar[0]
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


// 29. first 100 prime numbers

// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, "→", i);
            n++;
        }

        i++;
    }
}
// Returns true if a number is prime
function isPrime(n) {
    let prime = true
    if (n === 1) {
        prime = false
    } else if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                prime = false
                break
            }
        }
    }
    return prime
}

console.log(isPrime(5))
// printPrimes(100);