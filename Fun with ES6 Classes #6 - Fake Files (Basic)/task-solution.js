class File {
  #fullName;
  #contents;
  #lineIndex = 0;
  #charIndex = 0;

  constructor(fullName, contents) {
    this.#fullName = fullName;
    this.#contents = contents;
  }

  get fullName() {
    return this.#fullName;
  }

  get filename() {
    return this.#fullName.split('.').slice(0, -1).join('.');
  }

  get extension() {
    return this.#fullName.split('.').pop();
  }

  getContents() {
    return this.#contents;
  }

  write(str) {
    this.#contents += this.#contents ? `\n${str}` : str;
  }

  gets() {
    const lines = this.#contents.split('\n');
    return this.#lineIndex < lines.length ? lines[this.#lineIndex++] : undefined;
  }

  getc() {
    return this.#charIndex < this.#contents.length ? this.#contents[this.#charIndex++] : undefined;
  }
}
