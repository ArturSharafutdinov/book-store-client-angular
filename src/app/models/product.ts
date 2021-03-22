export class Product {
  bookId: number;
  name: string;
  pages: number;
  price: number;
  image: string;
  author: string;
  publisherName: string;
  categoryName: string;
  kolvo: number;


  constructor(bookId: number, name: string, pages: number, price: number, image: string, author: string, publisherName: string, categoryName: string, kolvo: number) {
    this.bookId = bookId;
    this.name = name;
    this.pages = pages;
    this.price = price;
    this.image = image;
    this.author = author;
    this.publisherName = publisherName;
    this.categoryName = categoryName;
    this.kolvo = kolvo;
  }
}
