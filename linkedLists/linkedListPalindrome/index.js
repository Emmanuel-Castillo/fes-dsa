/** Linked List Palindrome **
 *
 * Return true if the given linked list is a palindrome.
 * Otherwise return false.
 *
 * @example
 * isPalindrome(1 -> 2 -> 2 -> 1) true
 * isPalindrome(10 -> 20 -> 30) false
 * isPalindrome(10 -> 20 -> 300 -> 20 -> 10) true
 *
 */

const isPalindrome = (head) => {
    const values = []
    let curr = head

    while(curr){
        values.push(curr.val)
        curr = curr.next
    }

    let left = 0
    let right = values.length - 1

    while(left <= right){
        if(values[left] != values[right])
            return false

        left++
        right--
    }

    return true
};

module.exports = isPalindrome;