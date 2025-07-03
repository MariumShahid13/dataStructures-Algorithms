/** BigO for linear search is O(n) */
const linearSearch = (inpArray, searchStr) => {
    for (let index = 0; index < inpArray.length; index++) {
        const element = inpArray[index];
        if(element === searchStr) {
            return index
        }
    }
    return -1
}

console.log(linearSearch([-1, 10, 50, 3, 0, -20], 90))