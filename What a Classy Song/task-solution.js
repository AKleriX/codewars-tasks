class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listners = new Set();
  }

  howMany(list) {
    let counter = 0;
    for (let i = 0; i < list.length; i++)
      if (!this.listners.has(list[i].toLowerCase())) {
        counter++;
        this.listners.add(list[i].toLowerCase());
      }
    return counter;
  }
}
