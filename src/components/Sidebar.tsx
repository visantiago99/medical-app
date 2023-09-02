import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';
import {
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function SidebarDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        style={{ borderRight: '1px solid #aeaeae' }}
        className={` ${
          open ? 'w-48' : 'w-14 '
        } flex flex-col h-[calc(100%-0.2rem)] p-3 shadow duration-300 bg-[#f0f0f0]`}
      >
        <div className="space-y-3">
          <div className={`flex justify-center`}>
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <ChevronDoubleLeftIcon className="h-6 w-6" />
              ) : (
                <ChevronDoubleRightIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 flex flex-col gap-8 text-sm">
              <li className="rounded-sm">
                <Link
                  href="/"
                  className={`flex items-center rounded-md ${
                    open ? 'p-2 space-x-3' : ''
                  }`}
                >
                  <BuildingOffice2Icon className="h-6 w-6" />
                  <span className="text-black">{open ? 'Dashboard' : ''}</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/agenda-consultas"
                  className={`flex items-center rounded-md ${
                    open ? 'p-2 space-x-3' : ''
                  }`}
                >
                  <ClockIcon className="h-6 w-6" />
                  <span className="text-black">
                    {open ? 'Agendar Consulta' : ''}
                  </span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/status-consultas"
                  className={`flex items-center rounded-md ${
                    open ? 'p-2 space-x-3' : ''
                  }`}
                >
                  <ClipboardDocumentListIcon className="h-6 w-6" />
                  <span className="text-black">
                    {open ? 'Status de Consulta' : ''}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
