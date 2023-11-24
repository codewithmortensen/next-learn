'use client';

import { Button } from '@/components/ui/button';
import { SkipBack, StepBack, StepForward } from 'lucide-react';
import React from 'react';

interface Props {
  pageSize: number;
  page: number;
  itemCount: number;
}

const Paginations = ({ page, pageSize, itemCount }: Props) => {
  return (
    <div className='mt-5 self-start'>
      <div className='flex text-gray-500 gap-4'>
        <Button variant='outline' disabled={page == 1} onClick={() => page--}>
          <StepBack size={30} />
        </Button>
        <Button
          variant='outline'
          onClick={() => page++}
          disabled={Math.ceil(itemCount / pageSize) == page}
        >
          <StepForward size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Paginations;
