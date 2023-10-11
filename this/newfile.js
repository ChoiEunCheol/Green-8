function student(name, number) {
    this.name = name;
    this.number = number;
}

let studentArr = [];
let list = ["1","2"];

for ( let i = 0 ; i < 2 ; i++ ){
    studentArr[i] = new student(list[i],i+1);
}

console.log(studentArr);