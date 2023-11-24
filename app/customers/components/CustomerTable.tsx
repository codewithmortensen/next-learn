import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/prisma/client';

interface Props {
  pageSize: number;
  currentPage: number;
  itemCount: number;
}

export async function CustomerTable({
  pageSize,
  currentPage,
  itemCount,
}: Props) {
  const allTransactions = await prisma.transaction.findMany({
    take: pageSize,
    skip: (currentPage - 1) * pageSize,
  });

  return (
    <Table className='border'>
      <TableHeader className='p-12'>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allTransactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{transaction.status}</TableCell>
            <TableCell>{transaction.email}</TableCell>
            <TableCell>{transaction.amount.toNumber()}</TableCell>
            <TableCell>{transaction.date.toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
