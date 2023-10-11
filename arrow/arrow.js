function outer() {
    return "hello";
}

const outerTwo = function() {
    return "bye";
}

const outerThree = () => "wow";

console.log(outer());
console.log(outerTwo());
console.log(outerThree());
