// Anonymous functions problems

// 1. Print odd numbers in an array

const printOdds = function (arr) {
    arr.forEach(ele => {
        ele % 2 !== 0 && console.log(ele)
    })
}

printOdds([1, 3, 4, 5, 7])


// 2. Convert all the strings to title caps in a string array

const toTitleCase = function (arr) {
    let newArr = []
    arr.forEach(ele => {
        let newEle = `${ele[0].toUpperCase()}${ele.slice(1)}`
        newArr.push(newEle)
    })
    return newArr
}

const strrs = ["apple", "grape", "mango", "guava"]
console.log(toTitleCase(strrs))


// 3. Sum of all numbers in an array

const calSum = function (arr) {
    const sum = arr.reduce((pr, cr) => pr + cr, 0)
    return sum
}

console.log(calSum([1, 2, 3, 5, 6]))


// 4. Return all the prime numbers in an array

const findPrimes = function (arr) {
    let primes = []
    arr.forEach(ele => {
        let isPrime = true
        if (ele === 1) {
            isPrime = false
        } else if (ele > 1) {
            for (let i = 2; i < ele; i++) {
                if (ele % i === 0) {
                    isPrime = false
                    break
                }
            }
        }
        if (isPrime) {
            primes.push(ele)
        }
    })
    return primes
}

console.log(findPrimes([1, 2, 3, 5, 6, 7]))


// 5. Return all the palindromes in an array

const findPallindrome = function (arr) {
    let pallindromes = []
    arr.forEach(ele => {
        let isPallindrome = false
        let newEle = ele.split("").reverse().join("")
        if (ele === newEle) {
            isPallindrome = true
        }
        isPallindrome && pallindromes.push(ele)
    })
    return pallindromes
}

const words = ["aba", "iki", "mango", "guava"]
console.log(findPallindrome(words))


// 6.  Return median of two sorted arrays of same size

const arrMedian = function (arr1, arr2) {
    let newArr = [...arr1, ...arr2].map(ele => parseInt(ele))
    let median
    newArr.sort((a, b) => a - b)
    // console.log(newArr)
    const arrLength = newArr.length
    if (arrLength % 2 === 0) {
        median = newArr[(arrLength / 2) - 1] + newArr[arrLength / 2]
    } else {
        median = newArr[Math.floor(arrLength / 2)]
    }
    return median
}

let nums1 = [1, 2, 3, 4, 5, 15]
let nums2 = [6, 7, 8, 9, 10]

console.log(arrMedian(nums1, nums2))


//  7. Remove duplicates from an array

const removeDuplicate = function (arr) {
    let obj = {}
    let unique = []
    arr.forEach(ele => {
        let newEle = obj[ele]
        if (obj[ele] === undefined) {
            obj[ele] = 0
        }
        obj[ele]++
    })
    for (const key in obj) {
        if (obj[key] === 1) {
            unique.push(parseInt(key))
        }
    }
    return unique
}

const numbers = [1, 2, 1, 1, 2, 3, 5, 7]
console.log(removeDuplicate(numbers))



//  8. Rotate an array by k times

const rotateArr = function (arr, k) {
    let result = []
    const length = arr.length
    for (let index = 0; index < length; index++) {
        let newIndex = index + k
        // console.log(newIndex)
        if (newIndex >= length) {
            newIndex = newIndex - length
        }
        result.push(arr[newIndex])
    }
    return result
}

let numberss = [1, 2, 3, 5, 7]
console.log(rotateArr(numberss, 3))



//  Arrow functions problems


// 1. Print odd numbers in an array

const printOdd = (arr) => {
    arr.forEach(ele => {
        ele % 2 !== 0 && console.log(ele)
    })
}

printOdd([1, 3, 4, 5, 7])


// 2. Convert all the strings to title caps in a string array

const toTitleCasefn = (arr) => {
    let newArr = []
    arr.forEach(ele => {
        let newEle = `${ele[0].toUpperCase()}${ele.slice(1)}`
        newArr.push(newEle)
    })
    return newArr
}

const strrss = ["apple", "grape", "mango", "guava"]
console.log(toTitleCasefn(strrss))


// 3. Sum of all numbers in an array

const calSumfn = (arr) => {
    const sum = arr.reduce((pr, cr) => pr + cr, 0)
    return sum
}

console.log(calSumfn([1, 2, 3, 5, 6]))


// 4. Return all the prime numbers in an array

const findPrimesfn = (arr) => {
    let primes = []
    arr.forEach(ele => {
        let isPrime = true
        if (ele === 1) {
            isPrime = false
        } else if (ele > 1) {
            for (let i = 2; i < ele; i++) {
                if (ele % i === 0) {
                    isPrime = false
                    break
                }
            }
        }
        if (isPrime) {
            primes.push(ele)
        }
    })
    return primes
}

console.log(findPrimesfn([1, 2, 3, 5, 6, 7]))


// 5. Return all the palindromes in an array

const findPallindromefn = (arr) => {
    let pallindromes = []
    arr.forEach(ele => {
        let isPallindrome = false
        let newEle = ele.split("").reverse().join("")
        if (ele === newEle) {
            isPallindrome = true
        }
        isPallindrome && pallindromes.push(ele)
    })
    return pallindromes
}

const wordss = ["aba", "iki", "mango", "guava"]
console.log(findPallindromefn(wordss))