'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { columns } from './data';
import useFilter, { Product } from './useFilter';

export function ProductTable() {
  const params = useSearchParams();
  const category = params.get('category');
  const type = params.get('type');

  const urlSearch = new URLSearchParams();
  if (category) urlSearch.append('category', category!);
  if (type) urlSearch.append('type', type!);

  const { sortByKey } = useFilter();
  const order: keyof Product = params.get('orderBy') && params.get('orderBy')!;

  return (
    <Table className='border'>
      <TableCaption>List of Available Products.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.id}>
              <Link
                href={
                  urlSearch.size
                    ? `/products?${urlSearch.toString()}&orderBy=${col.value}`
                    : `/products?orderBy=${col.value}`
                }
              >
                {col.label}
              </Link>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortByKey(order).map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.productType}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
