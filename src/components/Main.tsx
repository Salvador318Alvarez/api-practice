const Main = ({libro, capitulo}) => {
    return ( 
        
        <main>
            <h3>{libro.book} - {capitulo +1}</h3>
      {libro.chapters[capitulo].verses.map(verse => (
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