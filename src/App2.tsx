import { useState } from 'react'
import genesis from './data/Genesis.json'
import bible from './data/Bible.json'

function App() {


  const [libro, setLibro] = useState(genesis)
  const [capitulo, setCapitulo] = useState(0)
  const [displayBooks, setDisplayBooks] = useState('display-none')
  const [displayChapters, setDisplayChapters] = useState('display-none')

  const handleBooksClick = () => {
  if (displayBooks == 'display-none'){
    setDisplayBooks('display')
  } else {setDisplayBooks('display-none')}
  }
  const handleChaptersClick = () => {
    if (displayChapters == 'display-none'){
      setDisplayChapters('display')
    } else {setDisplayChapters('display-none')}
    }

  return (
    <>
    <nav className={displayBooks + ' navbar'}>
        <h3>Choose Book</h3>
        <ul className='books'>
          <li onClick={() => {setLibro(genesis); setCapitulo(0); handleBooksClick() }}>Genesis</li>
        </ul>
    </nav>
    <nav className={displayChapters + ' navbar'}>
        <h3>Choose Chapter</h3>
        <ul className='chapters'>
          {libro.chapters.map((chapter, index) => (
            <li 
            key={Math.floor(Math.random()*1000000)}
            onClick={() => {setCapitulo(index); handleChaptersClick()}}>{index+1}</li>
          ))
          }
        </ul>
      </nav>
    
     <section className='title'>
      <h2>{libro.book}</h2> 
      <h3>Chapter {capitulo+1}</h3>
     </section>
   
     <main>
      {libro.chapters[capitulo].verses.map(verse => (
        <p key={Math.floor(Math.random()*10000000)}>
          <span className='bolder'>{verse.verse}</span>. {verse.text}
        </p>
      ))
      }
      </main>
      
      <footer className='footer'>
        <li>--</li>
        <h3>
          <span className='choose-book' onClick={handleBooksClick}>{libro.book} </span>
          <span className='choose-chapter' onClick={handleChaptersClick}> {capitulo+1}</span>
        </h3>
        <li>+</li>
      </footer>

    </>
  )
}

export default App
