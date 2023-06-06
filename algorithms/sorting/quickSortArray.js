const quickSort = (inputArray) => {
    if(inputArray.length === 0 || inputArray.length === 1) {
        return inputArray
    } else {
        return sortRecursively(inputArray)
    }
}

const sortRecursively = (inputArray) => {
    if(inputArray.length === 0 || inputArray.length === 1) {
        return inputArray
    } else {
        let pivot = inputArray[0]
        let smallerArray = []
        let greaterArray = []
        let finalArray = []
        inputArray.splice(0,1)
        inputArray.forEach((element, index) => {
            if(element < pivot) {
                smallerArray.push(element)
            } else {
                greaterArray.push(element)
            }
        });
        let smallArrResult = sortRecursively(smallerArray)
        let largeArrResult = sortRecursively(greaterArray)
        finalArray = finalArray.concat(smallArrResult)
        finalArray = finalArray.concat(pivot)
        finalArray = finalArray.concat(largeArrResult)
        return finalArray
    }
}


let result = quickSort([100,2,-1,-4,71,100,10,4,1])
console.log('result' + JSON.stringify(result))




