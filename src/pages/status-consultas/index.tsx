import StatusAppointmentTable from '@/components/StatusConsultas/StatusAppointmentTable';
import { Label } from '@/components/ui/label';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import Link from 'next/link';

const AppointmentStatus = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          <Label className="text-2xl" htmlFor="status-table">
            Status de Consultas
          </Label>
        </div>
        <StatusAppointmentTable />
      </div>
    </MainLayout>
  );
};

export default AppointmentStatus;
