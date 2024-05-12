import { Button as HeadlessUIButton } from '@headlessui/react';

import clsx from 'clsx';

const Button = (props) => {
  const { variant = 'primary', children, className, fullWidth, size = 'sm', icon, href, ...rest } = props;

  const baseButtonClassName =
    'flex justify-center items-center rounded-md px-3 py-2 font-semibold shadow-sm transition-background-color duration-200';
  const disabledButtonClassName = 'disabled:opacity-40 disabled:cursor-not-allowed';
  let buttonClassName = '';
  if (variant === 'primary') {
    buttonClassName = 'bg-orange-200 text-black enabled:hover:bg-orange-300';
  } else if (variant === 'secondary') {
    buttonClassName = 'bg-white/10 enabled:hover:bg-white/20';
  } else if (variant === 'text') {
    buttonClassName = 'bg-transparent enabled:hover:bg-white/10';
  }
  const buttonSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  if (href) {
    return (
      <a
        href={href}
        {...rest}
        className={clsx(
          baseButtonClassName,
          disabledButtonClassName,
          buttonSize[size],
          className,
          {
            ['w-full']: fullWidth,
          },
          'bg-orange-200 text-black hover:bg-orange-300',
        )}
      >
        {icon && <div className="mr-2">{icon}</div>}
        {children}
      </a>
    );
  }

  return (
    <HeadlessUIButton
      {...rest}
      type="button"
      className={clsx(baseButtonClassName, buttonClassName, disabledButtonClassName, buttonSize[size], className, {
        ['w-full']: fullWidth,
      })}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </HeadlessUIButton>
  );
};

export default Button;
