'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, CalendarIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { USER, GITHUB_REPO } from 'utils/data';
import clsx from 'clsx';
import MediaPlayer from 'components/MediaPlayer';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Create', href: '/create', icon: UsersIcon },
  { name: 'Library', href: '/me', icon: FolderIcon },
  { name: 'Explore', href: '/explore', icon: CalendarIcon },
];

const links = [
  { name: "What's New?", href: GITHUB_REPO },
  { name: 'Help', href: GITHUB_REPO },
  { name: 'About', href: GITHUB_REPO },
];

const SidebarLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMediaPlayer, setShowMediaPlayer] = useState(true);
  const pathname = usePathname();

  const isCurrent = (href) => pathname === href;

  return (
    <div className="flex h-full flex-1 flex-row">
      {showMediaPlayer && <MediaPlayer />}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog className="relative z-10 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-900 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <div>Onus</div>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={clsx(
                                  isCurrent(item.href)
                                    ? 'bg-neutral-800 text-white'
                                    : 'text-gray-400 hover:bg-neutral-800 hover:text-white',
                                  'group flex gap-x-3 p-2 text-sm font-semibold leading-6',
                                )}
                              >
                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <ul role="list" className="-mx-2 mt-2">
                          <li></li>
                          {links.map((link) => (
                            <li key={link.name}>
                              <a
                                href={link.href}
                                className={clsx(
                                  isCurrent(link.href) ? 'bg-neutral-800' : 'text-gray-400 hover:bg-neutral-800',
                                  'group flex gap-x-3 p-2 text-sm font-semibold leading-6',
                                )}
                              >
                                <span className="truncate">{link.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden pb-[69px] lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-[162px] lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col overflow-y-auto bg-neutral-900 px-6">
          <div className="flex h-16 w-full shrink-0 items-center">
            <div className="w-full text-2xl font-bold">Onus</div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col justify-between">
              <li className="-mx-6">
                <ul role="list">
                  {navigation.map((item) => (
                    <li key={item.name} className="-mx-6px-6">
                      <Link
                        href={item.href}
                        className={clsx(
                          isCurrent(item.href)
                            ? 'bg-neutral-800 text-white'
                            : 'text-gray-400 hover:bg-neutral-800 hover:text-white',
                          'group flex gap-x-3 px-6 py-2 text-sm font-semibold leading-6 transition-all duration-200',
                        )}
                      >
                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <ul role="list" className="mt-2">
                  <li className="-mx-6">
                    <a
                      href={GITHUB_REPO}
                      className={clsx(
                        'mb-8 font-normal text-gray-400 hover:bg-neutral-800',
                        'group flex gap-x-3 px-6 py-1 text-sm font-semibold leading-6 transition-all duration-200 hover:text-white hover:underline',
                      )}
                    >
                      <span>{USER.credits} Credits</span>
                    </a>
                  </li>
                  {links.map((link) => (
                    <li key={link.name} className="-mx-6">
                      <a
                        href={link.href}
                        className={clsx(
                          isCurrent(link.href) ? 'bg-neutral-800 text-white' : 'text-gray-400 hover:bg-neutral-800',
                          'group flex gap-x-3 px-6 py-1 text-sm font-semibold leading-6 transition-all duration-200 hover:text-white hover:underline',
                        )}
                      >
                        <span className="truncate">{link.name}</span>
                      </a>
                    </li>
                  ))}
                  <li className="-mx-6 mt-4">
                    <a
                      href={GITHUB_REPO}
                      className="flex items-center gap-x-2 px-6 py-3 text-sm font-semibold leading-6 hover:bg-neutral-800"
                    >
                      <img
                        className="h-8 w-8 rounded-full bg-neutral-800"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="sr-only">Your profile</span>
                      <span aria-hidden="true">{USER.username}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-neutral-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6">Dashboard</div>
        <a href={GITHUB_REPO}>
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-neutral-800"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      <main className="flex h-full w-full flex-col pb-[69px] lg:ml-[162px]">{props.children}</main>
    </div>
  );
};

export default SidebarLayout;
