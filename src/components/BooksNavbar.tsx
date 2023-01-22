const BooksNavbar = () => {
    return ( 
    // <nav className={displayBooks + ' navbar'}>
    <nav>
        <h3>Choose Book</h3>
        <ul className='books'>
          {/* <li onClick={() => {setLibro(genesis); setCapitulo(0); handleBooksClick() }}>Genesis</li>
          <li onClick={() => {setLibro(exodus); setCapitulo(0);handleBooksClick() }}>Exodus</li>
          <li onClick={() => {setLibro(leviticus); setCapitulo(0);handleBooksClick()}}>Leviticus</li>
          <li onClick={() => {setLibro(numbers); setCapitulo(0);handleBooksClick()}}>Numbers</li>
          <li onClick={() => {setLibro(deuteronomy); setCapitulo(0);handleBooksClick()}}>Deuteronomy</li> 
          */}
        </ul>
    </nav>
     );
}
 
export default BooksNavbar;