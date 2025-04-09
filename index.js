//1 Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function lengthCount(arr) {
    let x = arr.map(word => word.length)
    return x
}
console.log(lengthCount(["mahder", "smith"]))
//2 Given an array of numbers, write a function that filters out and returns only the even numbers.
function even(arr) {
    let a = arr.filter(item => item % 2 == 0)
    return a
}
console.log(even([4, 1, 7, 8, 6]))
//3 Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
function studentPassed(arr) {
    return arr.filter(item => item.grade > 75);
}
console.log(studentPassed([{ name: "mahder", grade: 87 }, { name: "Nahela", grade: 90 }, { name: "james", grade: 20 }]))

//4 Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
function square(arr) {
    let b = arr.map(num => num * num)
    return b
}
console.log(square([4, 1, 7, 8, 6]))
console.log(typeof (square))


//5 Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
function upperCase(arrayMixedDataType) {
    let x = arrayMixedDataType.filter(dataItem => typeof dataItem === 'string');
    return x.map(x => x.toUpperCase());
}
console.log(upperCase([2, 6, "mahder", 8, "Nice"]))