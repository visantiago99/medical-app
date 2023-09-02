import DashCalendar from '@/components/Dashboard/DashCalendar';
import DashCards from '@/components/Dashboard/DashCards';
import DashTable from '@/components/Dashboard/DashTable';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import { Label } from '@radix-ui/react-label';
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
              <DashTable />
            </div>
          </div>
          <div className="w-[40%]" style={{ border: '2px solid red' }}>
            <DashCalendar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
