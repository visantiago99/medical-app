import DashCalendar from '@/components/DashCalendar';
import DashCards from '@/components/DashCards';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Dashboard">
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
    </MainLayout>
  );
}
