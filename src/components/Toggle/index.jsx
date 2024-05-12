import { Switch } from '@headlessui/react';
import clsx from 'clsx';

export default (props) => {
  const { className, value, onChange, label } = props;

  return (
    <Switch.Group as="div" className={clsx(className, 'flex items-center')}>
      <Switch
        checked={value}
        onChange={onChange}
        className={clsx(
          value ? 'bg-orange-300' : 'bg-white/[0.24]',
          'relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            value ? 'translate-x-4' : 'translate-x-0',
            'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          )}
        />
      </Switch>
      {label && (
        <Switch.Label as="span" className="ml-3 text-md">
          {label}
        </Switch.Label>
      )}
    </Switch.Group>
  );
};
