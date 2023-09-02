import Link from 'next/link';

import { useState } from 'react';

export default function SidebarDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-48' : 'w-14 '
        } flex flex-col h-[calc(100%-0.2rem)] p-3 bg-slate-100 shadow duration-300`}
      >
        <div className="space-y-3">
          <div className={`flex justify-center`}>
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 flex flex-col gap-2 text-sm">
              <li className="rounded-sm">
                <Link
                  href="/"
                  className={`flex items-center rounded-md ${
                    open ? 'p-2 space-x-3' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-black">{open ? 'Dashboard' : ''}</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/mails"
                  className={`flex items-center rounded-md ${
                    open ? 'p-2 space-x-3' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-black">
                    {open ? 'Agendar Consulta' : ''}
                  </span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/products"
                  className={`flex items-center rounded-md ${
                    open ? 'p-2 space-x-3' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="text-black">
                    {open ? 'Buscar Consulta' : ''}
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
