import { useState } from 'react';
import Button from 'components/Button';
import { EllipsisHorizontalIcon, HandThumbDownIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { Float } from '@headlessui-float/react';
import clsx from 'clsx';

const SONG_ACTIONS_TOP = [
  {
    label: 'Reuse Prompt',
    href: '#reuse-prompt',
  },
  {
    label: 'Extend',
    href: '#extend',
  },
  {
    label: 'Rename',
    href: '#rename',
  },
];

const SONGS_ACTIONS_BOTTOM = [
  {
    label: 'Share',
    href: '#share',
  },
  {
    label: 'Download',
    href: '#download',
  },
  {
    label: 'Report',
    href: '#report',
  },
];

const Interactions = (props) => {
  const { song } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLike = () => {
    const newValue = !isLiked;
    if (newValue) {
      setIsDisliked(false);
    }
    setIsLiked(newValue);
  };

  const handleDislike = () => {
    const newValue = !isDisliked;
    if (newValue) {
      setIsLiked(false);
    }
    setIsDisliked(newValue);
  };

  return (
    <div className="flex items-center">
      <Button className="!p-2" variant="text" onClick={handleLike}>
        <HandThumbUpIcon
          className={clsx('h-4 w-4 text-neutral-500', {
            ['text-orange-200']: isLiked,
          })}
        />
      </Button>
      <Button className="!p-2" variant="text" onClick={handleDislike}>
        <HandThumbDownIcon
          className={clsx('h-4 w-4 text-neutral-500', {
            ['text-orange-200']: isDisliked,
          })}
        />
      </Button>
      <Button className="!p-2" variant="text">
        <ShareIcon className="h-4 w-4 text-white" />
      </Button>
      <Menu
        as="div"
        className="relative flex-none p-2 bg-transparent hover:bg-white/10 transition-background-color duration-200 rounded-md"
        onClick={handleToggleMenu}
      >
        <Float
          portal
          flip
          offset={8}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Button className="-m-2.5 block p-2.5 text-white">
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon className="h-4 w-4" aria-hidden="true" />
          </Menu.Button>
          <Menu.Items
            className={'w-64 p-2 rounded-md bg-neutral-800 shadow-lg ring-1 ring-neutral-700 focus:outline-none'}
          >
            <div>
              {SONG_ACTIONS_TOP.map((item) => (
                <Menu.Item key={item.label}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={clsx(
                        { ['bg-neutral-700']: active },
                        'block px-3 py-1 text-sm leading-6 text-white transition-all duration-200 rounded-lg',
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
            <div className="border-neutral-700 border-b-[1px] my-2" />
            <div>
              {SONGS_ACTIONS_BOTTOM.map((item) => (
                <Menu.Item key={item.label}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={clsx(
                        { ['bg-neutral-700']: active },
                        'block px-3 py-1 text-sm leading-6 text-white transition-all duration-200 rounded-lg',
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
            <div className="border-neutral-700 border-b-[1px] my-2" />
            <div>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#trash"
                    className={clsx(
                      { ['bg-neutral-700']: active },
                      'block px-3 py-1 text-sm leading-6 text-white transition-all duration-200 rounded-lg',
                    )}
                  >
                    Move to Trash
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Float>
      </Menu>
    </div>
  );
};

export default Interactions;
