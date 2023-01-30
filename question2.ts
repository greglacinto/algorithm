
function solution(inputArr: number[]) {
    // Implement your solution here
    return increasingMono(inputArr) || decreasingMono(inputArr)
    
}

function decreasingMono(inputArr:number[]){
    for(var i=0; i<inputArr.length-1;i++){
        //console.log(i, inputArr[i])
        if ((inputArr[i] < inputArr[i+1])){
            return false
        } 
    }
    return true
    
}

function increasingMono(inputArr:number[]){
    for(var i=0; i<inputArr.length-1;i++){
        //console.log(i, inputArr[i])
        if ((inputArr[i] > inputArr[i+1])){
            return false
        } 
    }
    return true
    
}