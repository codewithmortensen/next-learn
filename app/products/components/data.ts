export const products: {
  id: number;
  title: string;
  price: number;
  quantityInStock: number;
  productType: string;
  category: string;
}[] = [
  {
    id: 1,
    title: 'Smartphone',
    price: 499.99,
    quantityInStock: 50,
    productType: 'Digital',
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'Laptop',
    price: 1299.99,
    quantityInStock: 20,
    productType: 'Physical',
    category: 'Home Appliances',
  },
  {
    id: 3,
    title: 'Headphones',
    price: 79.99,
    quantityInStock: 100,
    productType: 'Physical',
    category: 'Home Appliances',
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    price: 49.99,
    quantityInStock: 30,
    productType: 'Physical',

    category: 'Fitness',
  },
  {
    id: 5,
    title: 'Coffee Maker',
    price: 89.99,
    quantityInStock: 15,
    productType: 'Physical',

    category: 'Home Appliances',
  },
  {
    id: 6,
    title: 'Smart TV',
    price: 799.99,
    quantityInStock: 10,
    productType: 'Physical',

    category: 'home Appliances',
  },
  {
    id: 7,
    title: 'Gaming Console',
    price: 299.99,
    quantityInStock: 25,
    productType: 'Physical',

    category: 'Gaming',
  },
  {
    id: 8,
    title: 'Wireless Earbuds',
    price: 129.99,
    quantityInStock: 40,
    productType: 'Physical',

    category: 'Electronics',
  },
  {
    id: 9,
    title: 'Tablet',
    price: 349.99,
    quantityInStock: 18,
    productType: 'Digital',

    category: 'Electronics',
  },
  {
    id: 10,
    title: 'Digital Camera',
    price: 599.99,
    quantityInStock: 12,
    productType: 'Digital',
    category: 'home Appliances',
  },
  {
    id: 11,
    title: 'Robot Vacuum',
    price: 199.99,
    quantityInStock: 8,
    productType: 'Digital',
    category: 'Home Appliances',
  },
  {
    id: 12,
    title: 'Portable Speaker',
    price: 39.99,
    quantityInStock: 50,
    productType: 'Digital',

    category: 'Electronics',
  },
  {
    id: 13,
    title: 'Desk Chair',
    price: 129.99,
    quantityInStock: 22,
    productType: 'Physical',

    category: 'Furniture',
  },
  {
    id: 14,
    title: 'Bluetooth Keyboard',
    price: 49.99,
    quantityInStock: 35,
    productType: 'Physical',

    category: 'Electronics',
  },
  {
    id: 15,
    title: 'External Hard Drive',
    price: 89.99,
    quantityInStock: 15,
    productType: 'Physical',
    category: 'Electronics',
  },
];

export const categories: { id: number; label: string; value: string }[] = [
  { id: 6, label: 'All', value: 'All' },
  { id: 1, label: 'Electronics', value: 'electronics' },
  { id: 2, label: 'Fitness', value: 'fitness' },
  { id: 3, label: 'Home Appliances', value: 'homeAppliances' },
  { id: 4, label: 'Gaming', value: 'gaming' },
  { id: 5, label: 'Furniture', value: 'furniture' },
];

export const types = [
  {
    id: 1,
    productType: 'Physical',
  },
  {
    id: 2,
    productType: 'Digital',
  },
];

export const columns: { id: number; label: string; value: string }[] = [
  { id: 1, label: 'Title', value: 'title' },
  { id: 2, label: 'Price', value: 'price' },
  { id: 3, label: 'Category', value: 'category' },
  { id: 4, label: 'Type', value: 'productType' },
];
