
/** BigO(nlogn) */
const mergeSort = (inputArray) => {
    if(inputArray.length === 0 || inputArray.length === 1) {
        return inputArray
    } else {
        return divideAndConquer(inputArray)
    }
}

const divideAndConquer = (inputArray) => {
    if(inputArray.length === 1) {
        return inputArray
    } else {
        // /** divide array into left and right */
        let tmp = JSON.parse(JSON.stringify(inputArray))
        let mid = Math.floor(inputArray.length / 2)
        let leftArray = divideAndConquer(inputArray.splice(0, mid))
        let rightArray = divideAndConquer(tmp.splice(mid))

        let leftArrayIndex = 0
        let rightArrayIndex = 0
        let sortedArray = []

        /** conquere and sort 
         * if leftArrayIndex reaches to leftArray length
         * or rightArrayIndex reaches to rightArray length
         * get out of while loop and append remaing respective array elements
         * in sorted Array
        */
        while (leftArrayIndex < leftArray.length && rightArrayIndex < rightArray.length) {
            if(leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
                sortedArray.push(leftArray[leftArrayIndex])
                leftArrayIndex++
            } else {
                sortedArray.push(rightArray[rightArrayIndex])
                rightArrayIndex++
            }
        }

        /** check which array elements are remaining */
        if(leftArrayIndex < leftArray.length) {
            sortedArray = sortedArray.concat(leftArray.splice(leftArrayIndex))
        } else if(rightArrayIndex < rightArray.length) {
            sortedArray = sortedArray.concat(rightArray.splice(rightArrayIndex))
        }

        return sortedArray
    }
}

// let result = mergeSort([100,2,-1,-4,71,10,4,1])
// console.log(result)

module.exports = {mergeSort}