import { Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

const TextArea = (props) => {
  const {
    label,
    placeholder,
    onChange,
    value,
    children,
    className,
    rows = 3,
    disabled,
  } = props;
  return (
    <Field
      className={clsx(
        className,
        'col-span-full data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40',
      )}
      disabled={disabled}
    >
      {label && (
        <Label
          htmlFor={label}
          className="mb-2 block text-sm font-medium leading-6"
        >
          {label}
        </Label>
      )}
      <div className="relative min-w-0 flex-1">
        <div className="focus-within:ring-2 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-neutral-800 transition-all duration-200 focus-within:ring-orange-400">
          {label && (
            <Label htmlFor={label} className="sr-only">
              {label}
            </Label>
          )}
          <Textarea
            id={label}
            name={label}
            rows={rows}
            className="sm:text-md block w-full border-0 bg-transparent px-4 py-2 font-light placeholder:text-white/[0.50] focus:ring-transparent data-[disabled]:cursor-not-allowed sm:leading-6"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />

          <div className="py-2" aria-hidden="true">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>

        {children && (
          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            {children}
          </div>
        )}
      </div>
    </Field>
  );
};

export default TextArea;
