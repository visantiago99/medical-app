import DashCalendar from '@/components/Dashboard/DashCalendar';
import ScheduleAppointmentTable from '@/components/ScheduleAppointment/ScheduleAppointmentTable';
import DoctorsTable from '@/components/ScheduleAppointment/DoctorsTable';
import { Label } from '@/components/ui/label';
import MainLayout from '@/layouts/MainLayout';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const AppointmentSchedule = () => {
  return (
    <MainLayout title="Agendar Consultas">
      <>
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          <Label className="text-2xl" htmlFor="status-table">
            Agendamento de Consultas
          </Label>
        </div>
        <div className="mt-4">
          <Label className="text-2xl" htmlFor="status-table">
            Médicos
          </Label>
        </div>
        <div className="flex flex-col gap-28 mt-2">
          <div className="flex w-full gap-20">
            <div className="w-[40%]">
              <DoctorsTable />
              <div className="mt-4">
                <DashCalendar />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[60%]">
              <Label className="text-2xl" htmlFor="status-table">
                Agendar Consulta
              </Label>
              <Label className="text-2xl" htmlFor="status-table">
                Hoje: {new Date().toLocaleDateString('en-US')}
              </Label>
              <ScheduleAppointmentTable />
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default AppointmentSchedule;
