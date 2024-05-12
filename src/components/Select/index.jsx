import { Field, Label, Select as HeadlessUISelect } from '@headlessui/react';

const Select = (props) => {
  const { className, label, options, ...rest } = props;

  return (
    <Field className={className}>
      {label && (
        <Label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </Label>
      )}
      <HeadlessUISelect
        id={label}
        name={label}
        className="mt-2 bg-black block w-full rounded-md border-0 py-1 pl-3 pr-10 ring-1 ring-inset ring-neutral-800 focus:ring-2 focus:ring-orange-400 sm:text-sm sm:leading-6"
        {...rest}
      >
        {options.map((option) => (
          <option key={`${option.label}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </HeadlessUISelect>
    </Field>
  );
};

export default Select;
