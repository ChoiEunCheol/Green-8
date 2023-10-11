function outerOne(a) {
    
    function innerOne(b){
        console.log(b);
    }
    innerOne(a);
}

console.log(outerOne("hello"));