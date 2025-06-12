import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg px-4 font-medium  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-[#fff] aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ButtonA({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex justify-center items-center gap-1 rounded-lg px-4 border border-[#e9dae900] bg-[#1d0215] text-[#ffffff] opacity-80 duration-150 ease-in hover:opacity-100 active:opacity-60 focus:outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-40 disabled:cursor-default disabled:opacity-40 ',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ButtonB({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex justify-center items-center gap-1 rounded-lg px-4 border border-[#e9dae9] bg-[#ffffff] text-[#1d0215] opacity-70 duration-150 ease-in hover:opacity-100 active:opacity-60 focus:outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-40 disabled:cursor-default disabled:opacity-40 ',
        className,
      )}
    >
      {children}
    </button>
  );
}

