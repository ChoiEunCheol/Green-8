function a(callback) {
    return callback();
}

console.log(a(function(){
    console.log(this);
}))