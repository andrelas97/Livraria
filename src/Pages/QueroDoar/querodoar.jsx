import S from './querodoar.module.scss'
import Livro from '../../assets/Vector.png'
import axios from 'axios'
import {useState} from 'react'

export default function Querodoar() {

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [imagem_url, setImagem_url] = useState("")


  const enviarDados = async()=>{
      
      const urlApi = "https://teste-deploy-bkai.onrender.com/doar"

    
      const dadosEnviar = {
          titulo,
          categoria,
          autor,
          imagem_url
      }

      await axios.post(urlApi, dadosEnviar)

      alert("Livro cadastrado!!") 

    
      setTitulo("")
      setCategoria("")
      setAutor("")
      setImagem_url("")
  }


  const capturaTitulo = (e) =>{
      setTitulo(e.target.value)
      console.log(e.target.value)
  }

  const capturaCategoria = (e) =>{
      setCategoria(e.target.value)
  }

  const capturaAutor = (e) =>{
      setAutor(e.target.value)
  }

  const capturaImagem = (e) =>{
      setImagem_url(e.target.value)
  }


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
         <input className={S.doar} type="submit" value="Doar" />
          </form>
        </section>
      </section>
    );
  }
  