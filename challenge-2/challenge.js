function challengeTwo(arr) {
    let n = arr.length;

for (let i = 0 ; i < n - 1 ; i ++ ){
    for ( let j = 0 ; j < n-i-1; j++){
        if( arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] =temp;
        }
    }
}
return arr;
}

const unsortedArray = [64, 12, 51, 93, 16, 68];
console.log(challengeTwo(unsortedArray));