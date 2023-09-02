import React from 'react';
import { DataProps, SortableTable } from '../base/SortableTable';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

const data: PatientProps[] = [
  {
    id: 'm5gr84i9',
    schedule: '02/09/2023, 07:30:00',
    status: 'Atendido',
    patient: 'Ken',
  },
  {
    id: '3u1reuv4',
    schedule: '02/09/2023, 08:30:00',
    status: 'Atendido',
    patient: 'Abe',
  },
  {
    id: 'derv1ws0',
    schedule: '02/09/2023, 09:00:00',
    status: 'Marcado',
    patient: 'Monsera',
  },
  {
    id: '5kma53ae',
    schedule: '02/09/2023, 09:30:00',
    status: 'Atendido',
    patient: 'Silas',
  },
  {
    id: 'bhqecj4p',
    schedule: '02/09/2023, 09:30:00',
    status: 'Desmarcado',
    patient: 'Carmella',
  },
  {
    id: 'bhqecj4p12',
    schedule: '02/09/2023, 10:00:00',
    status: 'Desmarcado',
    patient: 'Carteesa',
  },
  {
    id: 'bhqesafacj4p12',
    schedule: '02/09/2023, 10:30:00',
    status: 'Marcado',
    patient: 'Devns',
  },
  {
    id: 'bhqesafacj4p12',
    schedule: '02/09/2023, 11:00:00',
    status: 'Marcado',
    patient: 'Waasns',
  },
];

export type PatientProps = {
  id: string;
  schedule: string;
  status: 'Aguardando' | 'Marcado' | 'Atendido' | 'Desmarcado';
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
      <div className="capitalize">
        <Badge>{row.getValue('status')}</Badge>
      </div>
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
