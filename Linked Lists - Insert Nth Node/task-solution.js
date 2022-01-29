function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
  function insertNth(head, index, data) {
    if (head && index) {
      head.next = insertNth(head.next, index - 1, data);
      return head;
    }
    else if (!index) return new Node(data, head);
      
    throw new RangeError('Error!');
  }