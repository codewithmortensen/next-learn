'use client';

import { Input } from '@/components/ui/input';
import { ColumnsSelect } from './components/ColumnsSelect';
import { CustomerTable } from './components/CustomerTable';
import Pagination from './components/Pagination';
import { transactions } from './components/data';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  searchParams: { page: string };
}
const CustomerPage = ({ searchParams }: Props) => {
  const router = useRouter();

  return (
    <div className='max-w-screen-lg mx-auto py-10'>
      <div className='max-w-3xl mx-auto py-10'>
        <div className='flex gap-4 mb-5'>
          <Input
            type='text'
            placeholder='filter Email'
            onChange={(event) => {
              router.push(`/customers?email=${event.target.value}`);
            }}
          />
          <ColumnsSelect />
        </div>
        <CustomerTable
          pageSize={5}
          currentPage={parseInt(searchParams.page)}
          itemCount={0}
        />
        <Pagination
          pageSize={5}
          currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
          itemsCount={20}
        />
      </div>
    </div>
  );
};

export default CustomerPage;
