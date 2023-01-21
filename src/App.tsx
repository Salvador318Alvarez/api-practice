import data from './data/1Chronicles.json'


function App() {
 
  return (
    <>
     <h1>{data.book}</h1> 
     
     {data.chapters.map((chapter, index) => 
       {
        for (let i=0; i < chapter.verses.length; i++)
          {
            return (
                <p key={Math.floor(Math.random()*10000000)}>
                  {index+1}. {chapter.verses[i].text}
                </p>
              )
          }
       }
      )}
      

    </>
  )
}

export default App
