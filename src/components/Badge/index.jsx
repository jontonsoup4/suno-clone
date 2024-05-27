import clsx from 'clsx';

const Badge = (props) => {
  const { className, children, highlighted } = props;

  return (
    <span
      className={clsx(
        className,
        'ml-2 rounded-md bg-neutral-800 px-2 py-1 text-[10px]',
        {
          ['bg-neutral-700']: highlighted,
        },
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
