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
import { useRouter } from 'next/router';
import BaseTooltip from './BaseTooltip';

export default function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex">
      <div
        style={{ borderRight: '1px solid #aeaeae' }}
        className={` ${
          open ? 'w-52' : 'w-14.5 '
        } flex flex-col h-[calc(100%-0.2rem)] p-3 font-semibold shadow duration-300 bg-slate-200`}
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
              <BaseTooltip content="Dashboard">
                <li
                  className={`rounded-sm w-full hover:bg-slate-400 ${
                    router.pathname === '/dashboard' ? 'bg-slate-400' : ''
                  }`}
                >
                  <Link
                    href="/"
                    className={`flex items-center rounded-md p-2 ${
                      open ? 'space-x-3' : ''
                    }`}
                  >
                    <BuildingOffice2Icon className="h-6 w-6" />
                    <span className="text-black">
                      {open ? 'Dashboard' : ''}
                    </span>
                  </Link>
                </li>
              </BaseTooltip>
              <BaseTooltip content="Agenda de Consultas">
                <li
                  className={`rounded-sm w-full hover:bg-slate-400 ${
                    router.pathname === '/agenda-consultas'
                      ? 'bg-slate-400'
                      : ''
                  }`}
                >
                  <Link
                    href="/agenda-consultas"
                    className={`flex items-center rounded-md p-2 ${
                      open ? 'space-x-3' : ''
                    }`}
                  >
                    <ClockIcon className="h-6 w-6" />
                    <span className="text-black">
                      {open ? 'Agendar Consulta' : ''}
                    </span>
                  </Link>
                </li>
              </BaseTooltip>
              <BaseTooltip content="Status de Consulta">
                <li
                  className={`rounded-sm w-full hover:bg-slate-400 ${
                    router.pathname === '/status-consultas'
                      ? 'bg-slate-400'
                      : ''
                  }`}
                >
                  <Link
                    href="/status-consultas"
                    className={`flex items-center rounded-md p-2 ${
                      open ? 'space-x-3' : ''
                    }`}
                  >
                    <ClipboardDocumentListIcon className="h-6 w-6" />
                    <span className="text-black">
                      {open ? 'Status de Consulta' : ''}
                    </span>
                  </Link>
                </li>
              </BaseTooltip>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
