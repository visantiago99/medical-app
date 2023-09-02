import React from 'react';
import { DataProps, SortableTable } from '../base/SortableTable';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  PencilSquareIcon,
  TrashIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import BaseTooltip from '../base/BaseTooltip';

const data: ScheduleAppointment[] = [
  {
    id: 'm5gr84i9',
    schedule: '08:00:00',
    doctor: 'Ken',
  },
  {
    id: '3u1reuv4',
    schedule: '08:30:00',
    doctor: '',
  },
  {
    id: 'derv1ws0',
    schedule: '09:00:00',
    doctor: 'Monsera',
  },
  {
    id: '5kma53ae',
    schedule: '09:30:00',
    doctor: 'Silas',
  },
  {
    id: 'bhqecj4p',
    schedule: '10:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '10:30:00',
    doctor: 'John',
  },
  {
    id: 'derv1ws0',
    schedule: '11:00:00',
    doctor: '',
  },
  {
    id: '5kma53ae',
    schedule: '11:30:00',
    doctor: 'Rachel',
  },
  {
    id: 'bhqecj4p',
    schedule: '12:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '12:30:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '13:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '13:30:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '14:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '14:30:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '15:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '15:30:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '16:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '16:30:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '17:00:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '17:30:00',
    doctor: '',
  },
  {
    id: 'bhqecj4p12',
    schedule: '18:00:00',
    doctor: '',
  },
];

export type ScheduleAppointment = {
  id: string;
  doctor: string;
  schedule: string;
};

export const columns: ColumnDef<ScheduleAppointment>[] = [
  {
    id: 'schedule',
    accessorKey: 'schedule',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('schedule')}</div>
    ),
  },
  {
    id: 'appointment-status',
    cell: ({ row }) => {
      const hasDoctor = row.original.doctor;
      return hasDoctor ? (
        <Avatar>
          <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=male" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      ) : (
        <p>Livre</p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'doctor',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('doctor')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const hasDoctor = row.original.doctor;

      return hasDoctor ? (
        <div className="text-right">
          <BaseTooltip content="Remarcar">
            <Button variant={'link'}>
              <CalendarDaysIcon className="h-6 w-6" />
            </Button>
          </BaseTooltip>
          <BaseTooltip content="Editar">
            <Button variant={'link'}>
              <PencilSquareIcon className="h-6 w-6" />
            </Button>
          </BaseTooltip>
          <BaseTooltip content="Apagar">
            <Button variant={'link'}>
              <TrashIcon className="h-6 w-6" />
            </Button>
          </BaseTooltip>
        </div>
      ) : (
        <div className="text-right">
          <BaseTooltip content="Adicionar">
            <Button variant={'link'}>
              <PlusCircleIcon className="h-6 w-6" />
            </Button>
          </BaseTooltip>
        </div>
      );
    },
  },
];

const ScheduleAppointmentTable = () => {
  return (
    <div className="mt-2">
      <SortableTable
        data={data}
        columns={columns as ColumnDef<DataProps>[]}
        hasHeader={false}
      />
    </div>
  );
};

export default ScheduleAppointmentTable;
