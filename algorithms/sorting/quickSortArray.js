/** BigO(logn) 
 * In case if all elements are either smaller or larger then pivot
 * then BigO(n*n)
 *  */

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
        /** 
         * set first element in array as pivot 
         * seperate smaller and larger elements than pivot in seperate arrays
         *   */
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
        /** 
         * repeat process of creating pivot and arranging 
         * smaller and larger elements around pivot untill 
         * their remain no element in array or there is only one element in arrat
         */
        let smallArrResult = sortRecursively(smallerArray)
        let largeArrResult = sortRecursively(greaterArray)

        /** combine smaller and larger elements array around pivot */
        finalArray = finalArray.concat(smallArrResult)
        finalArray = finalArray.concat(pivot)
        finalArray = finalArray.concat(largeArrResult)
        return finalArray
    }
}


let result = quickSort([100,2,-1,-4,71,100,10,4,1])
console.log('result' + JSON.stringify(result))




