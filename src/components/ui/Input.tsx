import { ChangeEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ className, value, onChange }: InputProps) {
  return (
    <input
      className={twMerge(
        'w-full h-6 border-b border-cor-borda bg-cor-fundo outline-none focus:bg-cor-fundo-claro text-cor-texto-secundario px-2 py-4',
        className ?? ''
      )}
      value={value}
      onChange={onChange}
    />
  );
}
