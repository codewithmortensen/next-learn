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
import { useRouter, useSearchParams } from 'next/navigation';
import { types } from './data';

export function TypeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  return (
    <Select
      onValueChange={(type) => {
        const params = new URLSearchParams();
        if (searchParams.get('category'))
          params.append('category', searchParams.get('category')!);
        if (searchParams.get('orderBy'))
          params.append('orderBy', searchParams.get('orderBy')!);
        if (type) params.append('type', type);
        const query = params.size ? '?' + params.toString() : '';
        router.push('products/' + query);
      }}
      defaultValue={type ? type : ''}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a Type...' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Digital or Physical</SelectLabel>
          {types.map((type) => (
            <SelectItem key={type.id} value={type.productType}>
              {type.productType}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
