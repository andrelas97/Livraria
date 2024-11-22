import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Inicio from '../../Pages/inicio/Inicio'
import LivrosDoados from '../../Pages/LivrosDoados/livrosdoados'
import QueroDoar from '../../Pages/QueroDoar/querodoar'
import LogoLivro from '../../assets/livro.png'
import Lupa from '../../assets/lupa.png'
import S from './header.module.scss'

export default function Header(){
  return(
    <BrowserRouter>
    <header className={S.header}>
      <section className={S.logoHeader}>
        <img src={LogoLivro} alt="Imagem livro aberto"/>
        <h1>Livros Vai na Web</h1>
      </section>
      <nav className={S.navHeader}>
        <ul>
          <li><Link className={S.link} to='/'>Inicio</Link></li>
          <li><Link className={S.link} to='/livrosdoados'>Livros Doados</Link></li>
          <li><Link className={S.link} to='/querodoar'>Quero Doar</Link></li>
        </ul>
      </nav>
      <section className={S.barraDeBusca}>
        <input type="search" name="" id="" placeholder="O que você procura?"/>
        <button>
          <img src={Lupa} alt="Icone da lupa"/>
        </button>
      </section>
    </header>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/livrosdoados' element={<LivrosDoados/>}/>
      <Route path='/querodoar' element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
  )
}