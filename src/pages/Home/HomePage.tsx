import React from 'react'
import Feed from '../../components/Feed';
import Menu from '../../components/Menu';
import ListaSugestoes from '../../components/ListaSugestoes';
import Cabecalho from '../../components/Cabecalho';

export default function HomePage() {
  return (
    <div className='flex flex-col'>
        <Cabecalho />
        <Feed />
        <Menu />
        <ListaSugestoes />
    </div>
  )
}
