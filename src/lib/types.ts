export interface Product {
    id: string;
    name: string;
    price:  number;
    images: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    description?: string; // Optional field
    imageUrl?: string; // Optional field
    // Add other fields as necessary
  }
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;}

    
export interface Image {
  [x: string]: string;
  id: string;
  name: string;
  value: string;
}
export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
export interface User {
  id: string;
  email: string;
  username: string;
}

export interface Order {
  id: string;
  productName: string;
  productId: string;
  expire: number;
  status: string;
  name: string;
  amount: string;
  address: object;
  mobileNo: string;
  amountShipping: string;
  items: string;
  timestamp: number;
  images: string;
}
