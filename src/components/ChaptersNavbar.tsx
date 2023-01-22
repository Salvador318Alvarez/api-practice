const ChaptersNavbar = () => {
    return ( 
    // <nav className={displayChapters + ' navbar'}>
    <nav>
        <h3>Choose Chapter</h3>
        <ul className='chapters'>
          {/* {libro.chapters.map((chapter, index) => (
            <li 
            key={Math.floor(Math.random()*1000000)}
            onClick={() => {setCapitulo(index); handleChaptersClick()}}>{index+1}</li>
          ))
          } */}
        </ul>
      </nav>
     );
}
 
export default ChaptersNavbar;