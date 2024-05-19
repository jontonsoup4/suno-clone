import clsx from 'clsx';
import { Field, Label, Input as HeadlessUIInput } from '@headlessui/react';

const Input = (props) => {
  const { label, className, ...rest } = props;
  return (
    <Field className={className}>
      {label && (
        <Label htmlFor={label} className="mb-2 block text-sm font-medium leading-6">
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
            'sm:text-md block w-full rounded-lg bg-transparent px-4 py-1 font-light ring-1 ring-neutral-800 transition-all duration-200 placeholder:text-white/[0.50] focus:outline-none focus:ring-orange-300 sm:leading-6',
          )}
          {...rest}
        />
      </div>
    </Field>
  );
};

export default Input;
