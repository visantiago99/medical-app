import React from 'react';
import { DataProps, SortableTable } from '../SortableTable';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const data: PatientProps[] = [
  {
    id: 'm5gr84i9',
    schedule: '02/09/2023, 07:30:00',
    status: 'success',
    patient: 'Ken',
  },
  {
    id: '3u1reuv4',
    schedule: '02/09/2023, 08:30:00',
    status: 'success',
    patient: 'Abe',
  },
  {
    id: 'derv1ws0',
    schedule: '02/09/2023, 09:00:00',
    status: 'processing',
    patient: 'Monsera',
  },
  {
    id: '5kma53ae',
    schedule: '02/09/2023, 09:30:00',
    status: 'success',
    patient: 'Silas',
  },
  {
    id: 'bhqecj4p',
    schedule: '02/09/2023, 09:30:00',
    status: 'failed',
    patient: 'Carmella',
  },
  {
    id: 'bhqecj4p12',
    schedule: '02/09/2023, 10:00:00',
    status: 'failed',
    patient: 'Carteesa',
  },
  {
    id: 'bhqesafacj4p12',
    schedule: '02/09/2023, 10:30:00',
    status: 'success',
    patient: 'Devns',
  },
  {
    id: 'bhqesafacj4p12',
    schedule: '02/09/2023, 11:00:00',
    status: 'success',
    patient: 'Waasns',
  },
];

export type PatientProps = {
  id: string;
  schedule: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
  patient: string;
};

export const columns: ColumnDef<PatientProps>[] = [
  {
    id: 'select',
    header: () => '',
    cell: () => (
      <Avatar>
        <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=male" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'patient',
    header: 'Paciente',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('patient')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'schedule',
    header: () => <div className="text-right">Horário</div>,
    cell: ({ row }) => (
      <div className="capitalize text-right">{row.getValue('schedule')}</div>
    ),
  },
];

const DashPatientsTable = () => {
  return (
    <div className="mt-2">
      <SortableTable
        data={data}
        columns={columns as ColumnDef<DataProps>[]}
        hasPagination
      />
    </div>
  );
};

export default DashPatientsTable;
