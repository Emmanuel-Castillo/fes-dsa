class Node{
    constructor(val,next){
        this.val = val
        this.next = next
    }

    print(){
        let output = ""
        let curr = this

        while(curr) {
            output += `${curr.val} ->`
            curr = curr.next
        }

        console.log(output)
    }

    addToEnd(node){
        let curr = this

        while(curr.next){
            curr = curr.next
        }

        curr.next = node
    }

    removeByIndex(index){
        let curr = this
        let prev = null
        let i = 0

        while(i < index){
            prev = curr
            curr = curr.next
            i++
        }

        prev.next = prev.next.next

        return curr
    }

    addAtIndex(index, node){
        let curr = this
        let prev = null
        let i = 0

        while(i < index){
            prev = curr
            curr = curr.next
            i++
        }

        prev.next = node
        node.next = curr
    }
}

const head = new Node(1,null)

head.print()

head.addToEnd(new Node(2,null))
head.addToEnd(new Node(3,null))
head.addToEnd(new Node(4,null))
head.addToEnd(new Node(5,null))

head.print()

head.removeByIndex(3)

head.print()

head.addAtIndex(3, new Node(4,null))

head.print()