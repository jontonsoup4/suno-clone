import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

const Tooltip = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <QuestionMarkCircleIcon className="h-4 w-4" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex -translate-x-1/2 px-4">
          <div className="max-w-md flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-2">test</div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Tooltip;
