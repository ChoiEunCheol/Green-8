function a(callback) {
    return callback();
}

console.log(a(function(){
    console.log(this);
    console.log(global);
}))

// 콜백함수의 경우 전역객체를 바인딩한다.