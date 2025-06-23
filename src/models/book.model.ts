export interface Book {
  title: string;
  author: string;
  img: string;
  readtime: number;
  description: string;
  buy: {
    spain: string;
    us: string;
  };
}