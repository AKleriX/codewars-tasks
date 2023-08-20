class Singleton {
  constructor() {
    if (Singleton._instance) return Singleton._instance;
    Singleton._instance = this;
  }
}
