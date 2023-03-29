//Crewate a class to create a node/object
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Create a class to create a linked-list
class LinkedList {
    constructor() {
        this.head = null;
    }

    //Create a function that tells us the size of the list
    listSize() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count
    }
    //Create a function to get the last node in the list
    getLast(){
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    //Create a function to see if list is empty or not
    isEmpty() {
        return this.listSize() === 0;
    }
}

//Create nodes
let nodeA = new Node("A");
let nodeB = new Node("B");


//Change the nodeA 'next' property to nodeB
nodeA.next = nodeB;

//Create a list
let list = new LinkedList();

//Assign nodeA to be the head
list.head = nodeA;

//Create nodeC
let nodeC = new Node("C");

//Link nodeB to nodeC
nodeB.next = nodeC;

console.log('');
console.log('---NODE---');
console.log(nodeA);
console.log(nodeB);
console.log(nodeC);
console.log('');
console.log('---LINKED-LIST---');
// console.log(JSON.stringify(list));
console.log(list);
console.log("nodeB next property value:", list.head.next.next);

console.log("size:", list.listSize());
console.log("last node:", list.getLast());
console.log("isEmpty:", list.isEmpty());

//What if you have a very long linked list and don’t want to type .next a million times?
//You can use a loop:
// let currNode = list.head
// let depth = 902

// for (let i = 0; i < depth; i++) {
//     currNode = currNode.next
// }

// console.log(currNode)

//If you're searching for data added to a list and it can continually grow. It is then linear O(n) (Think worst case, since the list can grow without bounds).