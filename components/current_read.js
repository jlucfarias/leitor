import { useState } from 'react'

import styles from '../styles/CurrentRead.module.css'

export default function CurrentRead() {
  const [book, setBook] = useState({cover: "https://picsum.photos/id/237/190/250", title: "Título", author: "Autor", current_page: 5, total_pages: 100});
  // Pegar o último livro lido

  const renderContent = () => (
    <>
      <aside>
        <img src={book.cover} />
      </aside>
      <main>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>Página {book.current_page} de {book.total_pages}</p>
        <p>{(book.current_page / book.total_pages).toFixed(0)}% lido</p>
      </main>
    </>
  )

  return (
    <section className={styles.current_read}>
      <a href="/sobre">
        {renderContent()}
      </a>
    </section>    
  )
}
