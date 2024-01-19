export default class Pokemon {
  readonly name: string;
  readonly imgSrc: string;

  constructor(name: string, imgSrc: string) {
    this.name = name;
    this.imgSrc = imgSrc;
  }
}
