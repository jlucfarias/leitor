import { useState, useEffect } from 'react'
import { isMobile } from "react-device-detect"
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import CurrentRead from '../components/current_read'
import Library from '../components/library'

export default function Home() {
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
      {mobile && <CurrentRead />}
      <Library isMobile={mobile}/>
    </>
  )

  return (
    <>
      <Head>
        <title>Leitor - Início</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {renderPage()}
    </>
  )
}
