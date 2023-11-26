import Feed from 'components/Feed';
import Menu from 'components/Menu';
import Cabecalho from 'components/Cabecalho';

export default function Home() {
  return (
    <div className='flex flex-col'>
        <Cabecalho />
        <Feed />
        <Menu />
    </div>
  )
}
