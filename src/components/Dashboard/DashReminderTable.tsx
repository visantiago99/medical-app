import React from 'react';
import { DataProps, SortableTable } from '../SortableTable';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const data: RemindersProps[] = [
  {
    id: 'm5gr84i9',
    reminder: 'Revisar os registros médicos dos pacientes admitidos hoje.',
  },
  {
    id: '3u1reuv4',
    reminder: 'Reunião com contador',
  },
  {
    id: 'derv1ws0',
    reminder: 'Falar com fornecedor de máscaras',
  },
  {
    id: '5kma53ae',
    reminder: 'Realizar consultas agendadas no ambulatório pela manhã',
  },
  {
    id: 'bhqecj4p',
    reminder: 'Fazer pedidos de exames de imagem e laboratóriom',
  },
  {
    id: 'bhqecj4p12',
    reminder: 'Participar de treinamentos de atualização médica',
  },
  {
    id: 'bhqesafacj4p12',
    reminder: 'Revisar e assinar laudos de exames',
  },
  {
    id: 'bhqesafacj4p1224524',
    reminder: 'Prescrever medicamentos',
  },
];

export type RemindersProps = {
  id: string;
  reminder: string;
};

export const columns: ColumnDef<RemindersProps>[] = [
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
    accessorKey: 'reminder',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Lembrete
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('reminder')}</div>
    ),
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
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DashReminderTable = () => {
  return (
    <div className="mt-6">
      <SortableTable
        data={data}
        columns={columns as ColumnDef<DataProps>[]}
        hasPagination
      />
    </div>
  );
};

export default DashReminderTable;
