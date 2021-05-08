import { useState, useEffect } from 'react'
import { isMobile } from "react-device-detect"
import Head from 'next/head'

import styles from '../styles/Sobre.module.css'
import NavBar from '../components/navbar'

export default function Sobre() {
  const [mobile, setMobile] = useState(isMobile);

  useEffect(() => {
    function updateSize() {
      setMobile(window.innerWidth <= 768)
    }
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  const renderPage = () => {
    if (mobile)
      return (
        <>
          <main className={styles.main}>
            {renderContent()}
          </main>
          <NavBar />
        </>
      )
    return (
      <>
        <NavBar />
        <main className={styles.main}>
          {renderContent()}
        </main>
      </>
    )
  }

  const renderContent = () => (
    <>
      <h2>LOGO</h2>
      {/* <img /> */}

      <p>O Livrium surgiu da falta de bons leitores de livros na web que suportassem as mais variádas extensões, como: azw3, mobi, djvu, epub e pdf.</p>
      <p>Ele existe para que ninguém precise baixar vários leitores de ebooks só para ter suporte a todos esses tipos de arquivos, ou ainda um só leitor grande que tenha esse suporte.</p>
      <p>Todos os livros são salvos dentro do navegador, isto é, você não precisará enviar o arquivo todas as vezes que desejar ler. Isso também garante que nenhum dado seu será enviado para qualquer servidor, mas ficará no seu dispositivo.</p>
      <p>Você pode enviar um arquivo por vez, múltiplos arquivos ou uma pasta contendo todos os arquivos.</p>
      <p>Acesse as configurações para personalizar sua experiência de leitura e uso do Livrium.</p>
      <p>Boas leituras.</p>
    </>
  )

  return (
    <>
      <Head>
        <title>Leitor - Sobre</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {renderPage()}
    </>
  )
}
