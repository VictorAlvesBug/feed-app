import React, { MouseEvent, ReactNode, useCallback, useState } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

type ButtonProps =
  | {
      children: string;
      className?: ClassNameValue;
      onClick?: () => void;
      onClickPromise?: never;
    }
  | {
      children: string;
      className?: ClassNameValue;
      onClick?: never;
      onClickPromise?: () => Promise<string>;
    };

export default function Button({
  children,
  className,
  onClick,
  onClickPromise,
}: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const defaultClassName =
    'relative m-2 h-12 text-md border hover:bg-cor-fundo-claro text-cor-texto-principal border-cor-borda';

  const loadingClassName =
    'pointer-events-none m-2 h-12 text-md border hover:bg-cor-fundo text-cor-texto-principal border-cor-borda after:border-cor-fundo after:absolute after:-m-2 after:w-4 after:h-4 after:border-[3px] after:rounded-full after:border-t-cor-borda after:border-b-cor-borda after:animate-spin cursor-auto';

  const classNameUnion = isLoading
    ? twMerge(loadingClassName, className)
    : twMerge(defaultClassName, className);

  const onClickHandle = useCallback(async () => {
    if (onClick) {
      try {
        onClick();
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error as string);
      }
    }

    if (onClickPromise) {
      setIsLoading(true);
      const error = await onClickPromise();

      if (error.length === 0) {
        setIsLoading(false);
        setErrorMessage('');
        return;
      }

      setIsLoading(false);
      setErrorMessage(error);
    }
  }, [onClick, onClickPromise]);

  return (
    <>
      {errorMessage ? (
        <span className="text-sm text-cor-detalhe">{errorMessage}</span>
      ) : null}
      <button type="button" className={classNameUnion} onClick={onClickHandle}>
        {isLoading ? null : children}
      </button>
    </>
  );
}
