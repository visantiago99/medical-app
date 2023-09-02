import DashCalendar from '@/components/DashCalendar';
import DashCards from '@/components/DashCards';
import SearchBar from '@/components/SearchBar';
import { Label } from '@/components/ui/label';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Dashboard">
      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-20">
          <div className="flex flex-col gap-2 w-[60%]">
            <SearchBar />
            <div className="mt-4">
              <DashCards />
            </div>
          </div>
          <div className="w-[40%]">
            <DashCalendar />
          </div>
        </div>
        <div>
          <Label className="text-2xl" htmlFor="warnings">
            AVISOS / LEMBRETES
          </Label>
        </div>
      </div>
    </MainLayout>
  );
}
