export class FileMaster {
  path: string[];
  constructor(filepath) {
    this.path = filepath.match(/^(.*\/)([^.]+)\.(.*)$/);
  }

  extension() {
    return this.path[3];
  }

  filename() {
    return this.path[2];
  }

  dirpath() {
    return this.path[1];
  }
}
