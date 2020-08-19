class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;

    this.size = 0;
  }

  add(data) {
    const node = new Node(data);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }





  findValue(searchData){
    let node = new Node()

    if(this.head=== null){
      return false
    }else{
      if(this.head === searchData){
        return true
      }else{
        let current = this.head
        while(current){
          if(current.data === searchData){
          return true
          }else{
            current = current.next
          }
        }
        return false
        
      }
    }
  }

  findValuerecursive(data,head = this.head){
      if(head === null){
        return false
      }else if(head.data === data){
        return true
      }else{
        return this.findValuerecursive(data, head.next)
      }
  }


}

const myList = new LinkedList();
myList.add(3);
myList.add(4);
myList.add(5);
console.log(myList.findValuerecursive(6))
console.log(myList.findValuerecursive(5))
console.log(myList);


//Methods to attempt after feeling comfortable!
// -- How to sort a linkedList (with a while loop and a recursive loop)
// -- How to Insert into a sorted linkedList (with a while loop and a recursive loop)
// -- How to Delete from a sorted linkedList (with a while loop and a recursive loop)
// If feeling confident on all this, take a peek at  
//https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/,
// This is the ultimate interview question!

