import { fontAwesome as Fa } from 'lib/icones';

export default function Menu() {
  return (
    <nav className={`fixed flex items-center justify-center w-full bg-cor-fundo border-b border-cor-borda bottom-0`}>
        <span className='px-4 py-2 m-2 text-2xl cursor-pointer text-cor-texto-principal'>
            Instagram
        </span>
    </nav>
  )
}
