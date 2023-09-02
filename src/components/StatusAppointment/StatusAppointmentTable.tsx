import React from 'react';
import { DataProps, SortableTable } from '../SortableTable';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    schedule: '02/09/2023, 07:30:00',
    email: 'ken99@yahoo.com',
    name: 'ken',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    schedule: '02/09/2023, 07:30:00',
    name: 'abe',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    schedule: '02/09/2023, 07:30:00',
    name: 'monserrat',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    schedule: '02/09/2023, 07:30:00',
    name: 'Sila',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    schedule: '02/09/2023, 07:30:00',
    name: 'carmella',
    email: 'carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p12',
    amount: 221,
    status: 'failed',
    schedule: '02/09/2023, 07:30:00',
    name: 'carteesa',
    email: 'carteesa@hotmail.com',
  },
  {
    id: 'bhqesafacj4p12',
    amount: 521,
    status: 'success',
    schedule: '02/09/2023, 07:30:00',
    name: 'devns',
    email: 'devns12@hotmail.com',
  },
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    schedule: '02/09/2023, 07:30:00',
    name: 'ken',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    schedule: '02/09/2023, 07:30:00',
    name: 'Abe',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    schedule: '02/09/2023, 07:30:00',
    name: 'Monserrat',
    email: 'Monserrat44@gmail.com',
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  name: string;
  schedule: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'schedule',
    header: 'Horário',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('schedule')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      const formatted = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copiar ID do pagamento
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar Consulta</DropdownMenuItem>
            <DropdownMenuItem>Ver Detalhes do Pagamento</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const StatusAppointmentTable = () => {
  return (
    <SortableTable
      data={data}
      columns={columns as ColumnDef<DataProps>[]}
      hasFilter
      hasPagination
    />
  );
};

export default StatusAppointmentTable;
