import { useState } from 'react'
import genesis from './data/Genesis.json'
import exodus from './data/Exodus.json'
import leviticus from './data/Leviticus.json'

function App() {
  const [libro, setLibro] = useState(genesis)
  const [capitulo, setCapitulo] = useState(0)
  

  return (
    <>
      <li onClick={() => setData(exodus)}>Exodus</li>
      <li onClick={() => setData(leviticus)}>Leviticus</li>
     <h1>{libro.book}</h1> 
     
     {libro.chapters.map((chap) => 
          (<div key={Math.floor(Math.random()*1000000)}>
          <h3>Chapter {chap.chapter}</h3>
            {chap.verses.map(versiculo => (
                <p key={Math.floor(Math.random()*10000000)}>{versiculo.verse}. {versiculo.text}</p>
            ))
            }
          </div>
          )
      )} 
      

    </>
  )
}

export default App
