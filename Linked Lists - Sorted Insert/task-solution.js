// first solution

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    let currentNode = head;
    while (currentNode){
      if (currentNode.data > data){
        let tmp = currentNode;
        head = new Node(data);
        head.next = tmp;
        break;
      }
      if (currentNode.data < data && (!currentNode.next || currentNode.next.data > data)){
        if (!currentNode.next) currentNode.next = new Node(data);
        else {
          let tmp = currentNode.next;
          currentNode.next = new Node(data);
          currentNode.next.next = tmp;
        }
        break;
      }
      currentNode = currentNode.next;
    }
    return head ? head : new Node(data);
  }

  // better solution
  
  function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
  function sortedInsert(head, data) {
    if (!head || data < head.data) return new Node(data, head);
    head.next = sortedInsert(head.next, data);
    return head;
  }
