import Face from '../../assets/facebook.png'
import Insta from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import S from './footer.module.scss'


export default function Footer() {
    return (
      <footer>
        <section className={S.boxSocial}>
          <h3>4002-8922</h3>
          <nav>
            <a href=""><img src={Face} alt="Logo do facebook"/></a>
            <a href=""><img src={Twitter} alt="Logo do twitter"/></a>
            <a href=""><img src={Youtube} alt="Logo do youtube"/></a>
            <a href=""><img src={Linkedin} alt="Logo do linkedin"/></a>
            <a href=""><img src={Insta} alt="Logo do insta"/></a>
          </nav>
        </section>
        <section className={S.boxEnd}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
      </footer>
    );
  }
  