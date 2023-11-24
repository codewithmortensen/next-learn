'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  pageSize: number;
  currentPage: number;
  itemsCount: number;
}

const Pagination = ({ pageSize, currentPage, itemsCount }: Props) => {
  const router = useRouter();
  return (
    <div className='flex justify-between mt-5 items-center'>
      <p className='text-muted-foreground'>1 row Selected out of 5</p>
      <div className='space-x-4 '>
        <Button
          variant='outline'
          disabled={currentPage == 1}
          onClick={() => {
            currentPage -= 1;
            router.push(`/customers?page=${currentPage}`);
          }}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          disabled={Math.ceil(itemsCount / pageSize) === currentPage}
          onClick={() => {
            currentPage += 1;
            router.push(`/customers?page=${currentPage}`);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
