class SinglyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length =0;
  }

  isEmpty(){
    return this.length === 0;
  }

  push(value) {
    let newNode = {
      value: value,
      next: null,
    }

    if(this.isEmpty()) {
      this.head = newNode;
      this.tail =newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
  }

  pop() {
    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    if(!this.head) return null;

    if(this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }

    while(currentNode) {
      if(currentNode.next === this.tail) {
        newLastNode = currentNode
        break;
      }
      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;

    return lastNode;
  }
}


let list = new SinglyLinklist();

// console.log(list.isEmpty())
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
// console.log(list.isEmpty())
console.log("Head: ", list.head)
console.log("Tail: ", list.tail)
console.log(list)

//Just Practice

// class SinglyLinklist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   isEmpty() {
//     return this.length === 0;
//   }

//   push(value) {
//     let newNode = {
//       value: value,
//       next: null
//     }
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   pop() {
//     if (!this.head) return null;

//     if (this.length === 1) {
//       let removeNode = this.head;
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//       return removeNode;
//     }

//     let currentNode = this.head;
//     let lastNode = this.tail;
//     let newLastNode;
//     while (currentNode) {
//       if (currentNode.next == this.tail) {
//         newLastNode = currentNode;
//         break;
//       }
//       currentNode = currentNode.next;

//     }
//     newLastNode.next = null;
//     this.tail = newLastNode;
//     this.length--;

//     return lastNode
//   }
// }

// let list = new SinglyLinklist();

// // console.log(list.isEmpty())
// list.push(5);
// list.push(10);
// list.push(15);
// list.push(20);
// list.push(25);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// // list.pop();
// // console.log(list.isEmpty())
// console.log("Head: ", list.head)
// console.log("Tail: ", list.tail)
// console.log(list)



//Just Practice

// class SimplyLinklist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   isEmpty() {
//     return this.length === 0;
//   }

//   push(value) {
//     let newNode = {
//       value: value,
//       next: null
//     }
//     if(this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }
// }

// let list = new SimplyLinklist();

// // console.log(list.isEmpty())
// list.push(5);
// list.push(10);
// list.push(15);
// // console.log(list.isEmpty())
// console.log(list)
// console.log('Head: ',list.head)
// console.log("Tail: ",list.tail)