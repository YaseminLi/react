// yLinkedList linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
// linkedList.get(1);            //返回2
// linkedList.deleteAtIndex(1);  //现在链表是1-> 3
// linkedList.get(1);            //返回3

function MyLinkedList() {
  this.head = null;

  this.addAtHead = (val) => {
    const newItem = { val, next: null };
    if (!this.head) {
      this.head = newItem;
    } else {
      newItem.next = this.head;
      this.head = newItem;
    }
  };
  this.addAtTail = (val) => {
    const newItem = { val, next: null };
    let temp = this.head;
    if (!temp) {
      this.head = newItem;
    } else {
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newItem;
    }
  };
  this.get = (index) => {
    let curIndex = 0;
    let temp = this.head;
    while (temp) {
      if (index === curIndex) {
        return temp.val;
      } else {
        curIndex += 1;
        temp = temp.next;
      }
    }
  };

  this.addAtIndex = (index, val) => {
    if (index === 0) {
      this.addAtHead(val);
    } else {
      let curIndex = 0;
      let temp = this.head;
      while (curIndex !== index) {
        curIndex += 1;
        temp = temp.next;
      }
      const tail = temp;
    }
  };
  this.deleteAtIndex = (index) => {
    let temp = this.head;
    for (let curIndex = 0; curIndex < index; curIndex += 1) {}
  };
}

const linkedList = new MyLinkedList();

linkedList.addAtHead(1);
linkedList.addAtTail(3);
console.log(linkedList.head);
