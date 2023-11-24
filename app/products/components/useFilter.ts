'use client';

import { useSearchParams } from 'next/navigation';
import { products } from './data';

export type Product = {
  id: number;
  title: string;
  price: number;
  quantityInStock: number;
  productType: 'Digital' | 'Physical';
  category: string;
};
const useFilter = () => {
  const params = useSearchParams();
  const category = params.get('category');
  const type = params.get('type');

  const urlSearch = new URLSearchParams();
  if (category) urlSearch.append('category', category!);
  if (type) urlSearch.append('type', type!);

  const categoryFilter = category
    ? products.filter((product) => product.category === category)
    : products;

  const typeFilter = type
    ? categoryFilter.filter((product) => product.productType === type)
    : categoryFilter;

  const sortByKey = (key?: keyof Product) => {
    if (key) {
      return [...typeFilter].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    } else {
      return [...typeFilter];
    }
  };

  return { sortByKey, category, typeFilter };
};
export default useFilter;
