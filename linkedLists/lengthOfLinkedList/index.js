/** Length of Linked List **
 * 
 * Find the length of the given linked list. 
 *  
 * @example
 * lengthOfList(1 -> 2 -> 3) -> 3
 * lengthOfList(10 -> 20) -> 2
 * lengthOfList(100 -> 200 -> 300 -> 400) -> 4
 * 
 */

const lengthOfList = (head) => {
    let curr = this
    let count = 0

    while(curr){
        count++
        curr = curr.next
    }

    return count

}


module.exports = lengthOfList;