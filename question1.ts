
function solution1(inputArr: any[], k: number) {
    // rotate input array by k
    if (k < 0){
        return "k is negative. Please enter a positive value for k"
    }
    
    let newArr: any[] =[]
    inputArr.map((el, index, arr) => {
        index+k < inputArr.length ? newArr[index+k] = arr[index] : 
            newArr[index+k-inputArr.length] = arr[index]
    })
    return newArr;
    
}