class Phone {
  constructor() {
    this.ring = '';
    this.screen = '';
    this.microphone = '';
    this.currentCall = null;
  }

  incomingcall(number) {
    const contact = contacts.find((c) => c.number === number);
    if (contact) {
      this.ring = contact.ring;
      this.screen = `Call: ${contact.name}\nNumber: ${contact.number}`;
      this.currentCall = contact;
    } else {
      this.ring = 'Di Da Di';
      this.screen = `Call: stranger\nNumber: ${number}`;
      this.currentCall = { name: 'stranger', number };
    }
    this.microphone = '';
  }

  connect() {
    if (this.currentCall) {
      this.microphone =
        this.currentCall.name === 'stranger'
          ? 'Hello, who is speaking, please?'
          : `Hello, ${this.currentCall.name}!`;
      this.ring = '';
      this.screen = '';
    }
  }

  hangup() {
    this.ring = '';
    this.screen = '';
    this.microphone = '';
    this.currentCall = null;
  }
}
