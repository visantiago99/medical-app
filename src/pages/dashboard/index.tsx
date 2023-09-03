import DashCalendar from '@/components/Dashboard/DashCalendar';
import DashCards from '@/components/Dashboard/DashCards';
import DashPatientsTable from '@/components/Dashboard/DashPatientsTable';
import DashReminderTable from '@/components/Dashboard/DashReminderTable';
import SearchBar from '@/components/base/SearchBar';
import { Label } from '@/components/ui/label';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const DashboardPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="flex flex-col gap-28">
        <div className="flex w-full gap-20">
          <div className="flex flex-col gap-2 w-[60%]">
            <SearchBar />
            <div className="mt-4">
              <DashCards />
            </div>
            <div className="mt-4">
              <Label className="text-2xl" htmlFor="warnings">
                AVISOS / LEMBRETES
              </Label>
              <DashReminderTable />
            </div>
          </div>
          <div className="w-[40%]">
            <DashCalendar />
            <DashPatientsTable />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
