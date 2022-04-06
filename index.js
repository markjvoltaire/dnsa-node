class LinkedListNode {
    constructor(value) {
      // create a head that will count towards intial value
      this.head = {
        value,
        // the next will point towards the upcoming value
        next: null,
      };
      this.tail = this.head;
      // keept track of the length
      this.length = 1;
    }
    // we need 3 instances add, remove, getList
    // add
    add(value) {
      const newNode = {
        value,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    // remove
    remove(value) {
      // same thing as a add but the opposite
      const newNode = {
        value,
        next: null,
      };
    }
    // getList
    getList() {
      // if there is nothing next then return nothing
      // if (!this.next) {
      //   return
      // } else {
      //   return this.value + this.next.getList()
      // }
      // return this.head.value
      // while(this.head) {
      //   arr.push(this.head.value)
      // }
      // return arr
      // take an array and push value to an empty array
      // let arr = []
      // arr.push(this.head.value)
      // // return an array that has values
      // return arr;
      // return this
      return this;
    }
  }
  const root = new LinkedListNode(‘A’);
  const nodeB = new LinkedListNode(‘B’);
  root.add(nodeB);
  console.log(root.getList()); // ‘A B’
  const nodeC = new LinkedListNode(‘C’);
  const nodeD = new LinkedListNode(‘D’);
  const nodeE = new LinkedListNode(‘E’);
  root.add(nodeC);
  root.add(nodeD);
  root.add(nodeE);
  console.log(root.getList()); // ‘A B C D E’
  root.remove(1);
  console.log(root.getList()); // ‘A C D E’



class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
    add(node) {
      // implemented as in previous challenge
      const newNode = {
        person,
        left: this.left,
        right: this.right,
      };
      // this value represents how if this value is null then set it equal to that new node that is defined
      if (this.value === null) {
        this.value = newNode;
        // else we set the person equal to the node values
      } else {
        this.person = node;
      }
      // this.tail.next = newNode;
      // this.tail = newNode;
      // this.length++;
      // return this;
      // a second if check for sorting methodology
      if (this.left > this.right) {
        this.next = node;
      } else {
        this.next.add(node);
      }
    }
    findPerson(name) {
      // Implement me!
      // if the name exists then we return the person
      if (name) {
        return this;
      }
    }
  }
  // “root” is the node at the root of the tree (the tree)
  let person = root.find(‘Nelson’);
  // person looks like
  // {
  //   name: ‘Nelson’,
  //   phone: ‘555-1212’,
  //   address: ‘123 Main St’
  // }
  let person2 = root.find(‘Foo’);
  // person2 is null