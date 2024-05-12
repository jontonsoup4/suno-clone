import clsx from 'clsx';
import { Field, Label, Input as HeadlessUIInput } from '@headlessui/react';

const Input = (props) => {
  const { label, className, ...rest } = props;
  return (
    <Field className={className}>
      {label && (
        <Label htmlFor={label} className="block text-sm font-medium leading-6 mb-2">
          {label}
        </Label>
      )}
      <div className="mt-2">
        {label && (
          <Label htmlFor={label} className="sr-only">
            {label}
          </Label>
        )}
        <HeadlessUIInput
          type={label}
          name={label}
          id={label}
          className={clsx(
            className,
            'block w-full px-4 py-1 rounded-lg bg-transparent placeholder:text-white/[0.50] ring-1 focus:ring-orange-300 focus:outline-none font-light ring-neutral-800 sm:text-md sm:leading-6 transition-all duration-200',
          )}
          {...rest}
        />
      </div>
    </Field>
  );
};

export default Input;
