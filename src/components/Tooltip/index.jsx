import { useState } from 'react';
import { Float } from '@headlessui-float/react';
import { Menu } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

const Tooltip = (props) => {
  const { children } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOnMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleOnMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <Menu>
      <Float
        show={showTooltip}
        flip
        offset={8}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Button
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        >
          <QuestionMarkCircleIcon className="h-4 w-4 text-neutral-500" />
        </Menu.Button>

        <Menu.Items className="rounded-lg bg-neutral-700/[0.5] backdrop-blur-2xl" static>
          <p className="max-w-72 rounded-lg px-4 py-2 leading-6">{children}</p>
        </Menu.Items>
      </Float>
    </Menu>
  );
};

export default Tooltip;
