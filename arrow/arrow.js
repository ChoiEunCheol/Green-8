function outer() {
    return "hello";
}

const outerTwo = function() {
    return "bys";
}

console.log(outer());
console.log(outerTwo());
