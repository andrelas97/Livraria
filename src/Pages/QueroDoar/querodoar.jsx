import S from './querodoar.module.scss'
import Livro from '../../assets/Vector.png'

export default function LivrosDoados() {
    return (
      <section className={S.principal}>
        <section className={S.container}>
          <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
          <form action="">
            <div>
              <img src={Livro} alt=""/>
              <h3>Informações do Livro</h3>
            </div>
         <input type="text" placeholder='Titulo' />
         <input type="text" placeholder='Categoria'/>
         <input type="text" placeholder='Autor'/>
         <input type="text" placeholder='Link da imagem'/>
          </form>
        </section>
      </section>
    );
  }
  