export type LayoutParams<T extends Record<string, string | string[]>> = {
  children: React.ReactNode;
  params: T;
};

export type PageParams<T extends Record<string, string | string[]>> = {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type Login = {
  id: string;
  username: string;
  password: string;
};

export type Register = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type Cart = {
  id: number;
  products: [
    {
      id: number;
      title: string;
      price: number;
      quantity: number;
      total: number;
      discountPercentage: number;
      discountedTotal: number;
      thumbnail: string;
    }
  ];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type Carts = {
  carts: Array<Cart>;
  total: number;
  skip: number;
  limit: number;
};

export type User = {
  address: Object;
  age: number;
  bank: Object;
  birthDate: string;
  bloodGroup: string;
  company: Object;
  crypto: Object;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: Object;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};
