import React from 'react'

export default function Cabecalho() {
  return (
    <nav className={`fixed flex items-center justify-center w-full bg-cor-fundo border-b border-cor-borda`}>
        <span className='px-4 py-2 m-2 text-2xl cursor-pointer text-cor-texto-principal'>
            Instagram
        </span>
    </nav>
  )
}
