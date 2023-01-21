import { useState } from 'react'
import genesis from './data/Genesis.json'
import exodus from './data/Exodus.json'
import leviticus from './data/Leviticus.json'
import numbers from './data/Numbers.json'
import deuteronomy from './data/Deuteronomy.json'

function App() {
  const [libro, setLibro] = useState(genesis)
  const [capitulo, setCapitulo] = useState(0)
  const [display, setDisplay] = useState('display-none')
  const handleClick = () => {
  if (display == 'display-none'){
    setDisplay('display')
  } else {setDisplay('display-none')}
  }

  return (
    <>
    <header className='header'>
      <h1 className='main-title'>Bible App</h1>
      <span className='button' onClick={handleClick}>Choose Passage</span>
    </header>

    <nav className={display}>
        <h3>Books</h3>
        <ul className='navbar books'>
          <li onClick={() => {setLibro(genesis); setCapitulo(0)}}>Genesis</li>
          <li onClick={() => {setLibro(exodus); setCapitulo(0)}}>Exodus</li>
          <li onClick={() => {setLibro(leviticus); setCapitulo(0)}}>Leviticus</li>
          <li onClick={() => {setLibro(numbers); setCapitulo(0)}}>Numbers</li>
          <li onClick={() => {setLibro(deuteronomy); setCapitulo(0)}}>Deuteronomy</li>
        </ul>
        <h3>Chapters</h3>
        <ul className='navbar chapters'>
          {libro.chapters.map((chapter, index) => (
            <li onClick={() => {setCapitulo(index)}}>{index+1}</li>
          ))
          }
        </ul>
      </nav>
    
     <section className='title'>
      <h2>{libro.book}</h2> 
      <h3>Chapter {libro.chapters[capitulo].chapter}</h3>
     </section>
   
     <main>
      {libro.chapters[capitulo].verses.map(verse => (
        <p key={Math.floor(Math.random()*10000000)}>
          {verse.verse}. {verse.text}
        </p>
      ))
      }
      </main>
      

    </>
  )
}

export default App
