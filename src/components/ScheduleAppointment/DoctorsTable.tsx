import React from 'react';
import { DataProps, SortableTable } from '../base/SortableTable';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const data: PatientProps[] = [
  {
    id: 'm5gr84i9',
    status: 'Atendendo',
    doctor: 'Ken',
    speciality: 'Cardiologia',
  },
  {
    id: '3u1reuv4',
    status: 'Atendendo',
    doctor: 'Abe',
    speciality: 'Ginecologia',
  },
  {
    id: 'derv1ws0',
    status: 'Atendendo',
    doctor: 'Monsera',
    speciality: 'Ortopedia',
  },
  {
    id: '5kma53ae',
    status: 'Atendendo',
    doctor: 'Silas',
    speciality: 'Neurologia',
  },
  {
    id: 'bhqecj4p',
    status: 'Livre',
    doctor: 'Carmella',
    speciality: 'Psiquiatria',
  },
  {
    id: 'bhqecj4p12',
    status: 'Livre',
    doctor: 'Carteesa',
    speciality: 'Dermatologia',
  },
];

export type PatientProps = {
  id: string;
  status: 'Atendendo' | 'Livre';
  doctor: string;
  speciality: string;
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
    accessorKey: 'doctor',
    header: 'Médico',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('doctor')}</div>
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
    accessorKey: 'speciality',
    header: 'Especialidade',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('speciality')}</div>
    ),
  },
];

const DoctorsTable = () => {
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

export default DoctorsTable;
