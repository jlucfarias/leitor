import { useState } from 'react'

import styles from '../styles/Library.module.css'

export default function Library({isMobile}) {
  const [books, setBooks] = useState([{cover: "https://picsum.photos/id/237/190/250"}, {cover: "https://picsum.photos/id/237/190/250"}, {cover: "https://picsum.photos/id/237/190/250"}, {cover: "https://picsum.photos/id/237/190/250"}]);
  const [readingBook, setReadingBook] = useState({cover: "https://picsum.photos/id/237/190/250", title: "Título", author: "Autor", current_page: 5, total_pages: 100})
  // Pegar todos os livros do bd

  const renderFirstItem = () => {
    if (isMobile)
      return (
        <li className={styles.new_book}>
          <form><input type="file" /></form>
          <button>Adicionar livro</button>
        </li>
      )
    return (
      <li className={styles.current_read}>
        <a>
          <img src={readingBook.cover} />
          <progress id="file" value="32" max="100"> 32% </progress>
        </a>
      </li>
    )
  }

  return (
    <section className={styles.library}>
      <header>
        <h2>Minha Biblioteca</h2>
        <div className={styles.button_group}>
          <a>coleções</a>
          <a>pesquisa</a>
          <a>filtro</a>
          <a>grid or list</a>
        </div>
      </header>
      <main>
        <ol>
          {renderFirstItem()}          
          {books.map(book => (<li className={styles.book} onClick={() => {}}>
            <img src={book.cover} />
            <a>opções</a>
          </li>))}
        </ol>
      </main>
    </section>
  )
}
