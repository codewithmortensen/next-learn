'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from './data';
import { useRouter, useSearchParams } from 'next/navigation';

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <Select
      onValueChange={(category) => {
        const params = new URLSearchParams();
        if (category && category !== 'All') params.append('category', category);
        if (searchParams.get('type'))
          params.append('type', searchParams.get('type')!);
        if (searchParams.get('orderBy'))
          params.append('orderBy', searchParams.get('orderBy')!);
        const query = params.size ? '?' + params.toString() : '';
        router.push('/products' + query);
      }}
      defaultValue={category ? category : ''}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a Category' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.label}>
              {category.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
