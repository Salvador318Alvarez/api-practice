import { useState } from 'react'
import genesis from './data/Genesis.json'
import exodus from './data/Exodus.json'

function App() {
  const [data, setData] = useState(genesis)

  

  return (
    <>
     <h1>{data.book}</h1> 
     
     {data.chapters.map((chap) => 
          (<div key={Math.floor(Math.random()*1000000)}>
          <h3>Chapter {chap.chapter}</h3>
          <p> </p>
          </div>
          )
      )} 
      

    </>
  )
}

export default App
