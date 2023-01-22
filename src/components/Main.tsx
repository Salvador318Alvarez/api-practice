const Main = ({libro, chapterNum}) => {
    return ( 
        
        <main>
      {libro.chapters[chapterNum].verses.map(verse => (
        <p key={Math.floor(Math.random()*10000000)}>
          <span className='bolder'>{verse.verse}</span>. {verse.text}
        </p>
      ))
      }
      {/* {libro.chapters[capitulo].verses.map(verse => (
        <p key={Math.floor(Math.random()*10000000)}>
          <span className='bolder'>{verse.verse}</span>. {verse.text}
        </p>
      ))
      } */}
      </main>

     );
}
 
export default Main;