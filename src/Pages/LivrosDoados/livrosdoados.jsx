import S from './doados.module.scss'
import Protagonista from '../../assets/book.png'

export default function LivrosDoados() {
    return (
      <section className={S.boxDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxCard}>
          <article>
            <img src={Protagonista} alt="" />
            <h3>O Protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </article>
        </section>
      </section>
    );
  }
  