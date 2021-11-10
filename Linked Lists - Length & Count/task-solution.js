function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let leath = 0;
    while (head){
        leath++;
        head = head.next;
    }
    return leath;
}

function count(head, data) {
    let numCounter = 0;
    while (head){
        if (head.data === data)
            numCounter++;
        head = head.next;
    }
    return numCounter;
}