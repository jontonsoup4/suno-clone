import { Fragment, useRef, useState } from 'react';
import { Float } from '@headlessui-float/react';
import { Menu } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

const Tooltip = (props) => {
  const { children } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  const floatRef = useRef(null);

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
        placement="bottom"
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

        <Menu.Items static>
          <p className="rounded-lg bg-neutral-800 px-4 py-2 max-w-72 leading-6">{children}</p>
        </Menu.Items>
      </Float>
    </Menu>
  );
};

export default Tooltip;
