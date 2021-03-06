export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  async getAllCharacters() {
    const res = await this.getResource('/characters?page=5&pageSize=7');
    return res.map(this._transformCharacter)
  }
  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  async getAllBooks() {
    const res = await this.getResource('/books');
    return res.map(this._transformBooks)
  }
  async getBook(id) {
    const book = await this.getResource(`/books/${id}`);
    return this._transformCharacter(book  );
  }

  async getAllHouses() {
    const res = await this.getResource('/houses');
    return res.map(this._transformHouses)
  }
  async getHouse(id) {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformCharacter(house);
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }

  _transformBooks(book) {
    return {
      name: book.name,
      numberOfPages: book.nemberOfPages,
      publiser: book.publiser,
      released: book.released
    }
  }

  _transformHouses(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overload: house.overload,
      ancestralWeapons: house.ancestralWeapons
    }
  }

}