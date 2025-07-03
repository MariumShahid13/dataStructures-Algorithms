/** BigO(n*n) */
const sortArrayInAscending = (inputArray, sortedArray) => {
    if(inputArray.length === 0) {
        return sortedArray
    } else {
        let min = Infinity
        let minIndex = -1
        /** check each element for min and update min and minIndex */
        inputArray.forEach((ele, index) => {
            if(ele < min) {
                min = ele
                minIndex = index
            }
        });
        /** push min element from inputArray to sortedArray  */
        sortedArray.push(min)
        /** remove min element from list */
        inputArray.splice(minIndex, 1)

        return sortArrayInAscending(inputArray, sortedArray)
    }
}

let result = sortArrayInAscending([100,2,-1,-4,71,10,4,1], [])
console.log(result)