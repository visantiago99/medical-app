import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
          placeholder="Buscar..."
          required
        />
      </div>
    </>
  );
}
