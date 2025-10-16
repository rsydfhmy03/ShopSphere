export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating; // Kita juga buat interface untuk rating
}

export interface Rating {
  rate:  number;
  count: number;
}