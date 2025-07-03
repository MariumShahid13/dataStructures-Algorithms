const { mergeSort } = require('../sorting/mergeSortArray')

const binarySearch = (inpArray, searchStr) => {
    /** sort Array using mergeSort algo
     * it will take O(nlog(n))
    */
    const sortedArray = mergeSort(inpArray)
    /** BigO of binary search is O(log(n)) */
    return searchFunc(sortedArray, searchStr, 0, sortedArray.length)
}

const searchFunc = (inpArray, searchStr, l, r) => {
    if(l > r) {
        return -1
    } else {
        let mid = Math.floor((r + l)/2)
        if( inpArray[mid] === searchStr ) {
            return mid
        } else if(searchStr < inpArray[mid] ) {
            r = mid - 1
            return searchFunc(inpArray, searchStr, l , r)
        } else {
            l = mid + 1
            return searchFunc(inpArray, searchStr, l, r)
        }
    }
}

console.log(binarySearch([1,5,10,-1,30,15,6,2,90], 10))