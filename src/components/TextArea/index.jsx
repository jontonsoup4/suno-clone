import { Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

const TextArea = (props) => {
  const { label, placeholder, onChange, value, children, className, rows = 3, disabled } = props;
  return (
    <Field
      className={clsx(className, 'col-span-full data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40')}
      disabled={disabled}
    >
      {label && (
        <Label htmlFor={label} className="block text-sm font-medium leading-6 mb-2">
          {label}
        </Label>
      )}
      <div className="min-w-0 flex-1 relative">
        <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-neutral-800 focus-within:ring-2 focus-within:ring-orange-400 transition-all duration-200">
          {label && (
            <Label htmlFor={label} className="sr-only">
              {label}
            </Label>
          )}
          <Textarea
            id={label}
            name={label}
            rows={rows}
            className="block w-full border-0 px-4 py-2 bg-transparent placeholder:text-white/[0.50] focus:ring-transparent font-light sm:text-md sm:leading-6 data-[disabled]:cursor-not-allowed"
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

        {children && <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">{children}</div>}
      </div>
    </Field>
  );
};

export default TextArea;
