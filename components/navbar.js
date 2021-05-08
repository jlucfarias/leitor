import Link from 'next/link'

import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <header className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          Biblioteca
        </Link>
        <Link href="/configuracoes">
          Configurações
        </Link>
        <Link href="/sobre">
          Sobre
        </Link>
      </div>
      <form className={styles.search_container}>
        <input className={styles.searchbar} type="text" placeholder="Sua Pesquisa" />
      </form>
    </header>
  )
}
