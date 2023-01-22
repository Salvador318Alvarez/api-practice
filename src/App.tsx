import bible from "./data/Bible.json"
import { useState } from "react";

const App = () => {
    const [chapterNum, setChapterNum] = useState(0)
    const [bookNum, setBookNum] = useState(0)
    
    const [showMain, setShowMain] = useState(true)
    const [showBooksNav, setShowBooksNav] = useState(false)
    const [showChaptersNav, setShowChaptersNav] = useState(false)
    const [showSearchResults, setShowSearchResults] = useState(false)

    const [searchInput, setSearchInput] = useState(null)
    const [searchOutput, setSearchOutput] = useState(null)

    const libro = bible[bookNum]

    const books = bible.map(book => book.chapters.map(chap => chap.verses.map(verse => verse.text)))
   

    

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearchInput(e.target.value)
        setSearchOutput(bible.filter(libre =>
            libre.book.includes(searchInput)))
        console.log(searchOutput);
        
        if(e.target.value !== ''){
        setShowBooksNav(false)
        setShowChaptersNav(false)
        setShowMain(false)
        setShowSearchResults(true)
        }
        else{
            setShowBooksNav(false)
            setShowChaptersNav(false)
            setShowMain(true)
            setShowSearchResults(false)
        }
    }

    return ( 
    <>
    <header className='header'>
        <h1 className='main-title'
            onClick= {() => 
                {setShowSearchResults(false); 
                 setShowMain(true)
                }
            }
        >KJV App</h1>
        <input 
            className="search"
            type="text"
            placeholder="search"
            onChange={handleChange}
        />
    </header>

    {showMain && (

    <main className="main">
        {libro.chapters[chapterNum].verses.map(verse => (
            <p key={Math.floor(Math.random()*10000000)}>
                <span className='bolder'>{verse.verse}</span>. {verse.text}
            </p>
        ))
        }
    </main>

    )}  

    {showSearchResults && (
        <main>
            <h3>Search Results for {searchInput}</h3>
            {searchOutput.map(result => (
                <p>{result.book}</p>
            ))} 
            
        </main>
    )}

    {showBooksNav && (
    <nav>
        <h3>Choose Book</h3>
        <ul className='navbar navbar-books'>
        {bible.map((book, index) => (
            <li
            key={Math.floor(Math.random()*1000000)}
            onClick={
                () => {
                    setBookNum(index);
                    setShowBooksNav(false);
                    setShowMain(false);
                    setShowChaptersNav(true);
                }
            }>{book.book}</li>
        ))
        } 
        </ul>
    </nav>
    )}

    {showChaptersNav && (
    <nav >
        <h3>Choose Chapter</h3>
        <ul className='navbar navbar-chapters'>
        {libro.chapters.map((chapter, index) => (
            <li
            key={Math.floor(Math.random()*1000000)}
            onClick={
                () => {
                    setChapterNum(index);
                    setShowBooksNav(false);
                    setShowChaptersNav(false);
                    setShowMain(true)
                }
            }>{index+1}</li>
        ))
        } 
        </ul>
    </nav>
    )}
    
    <footer className='footer'>

        <li onClick={() => {
            if (chapterNum !== 0){
                setChapterNum(chapterNum - 1)
            }
            else {
                if(bookNum === 0){
                    setBookNum(65)
                    setChapterNum(21)
                } else {
                    setBookNum(bookNum - 1);
                    setChapterNum(bible[bookNum-1].chapters.length-1)
                }
            }
        }
           
        }>--</li>

        <h3>
            <span 
                className='choose-book'
                onClick={() => {
                    if (!showMain){
                        setShowChaptersNav(false);
                        setShowBooksNav(false);
                        setShowMain(true);
                    } else {
                    setShowMain(false); 
                    setShowChaptersNav(false);
                    setShowBooksNav(true)}}}
            >{libro.book}</span>
            <span 
                className='choose-chapter'
                onClick={() => {
                    if (!showMain){
                        setShowChaptersNav(false);
                        setShowBooksNav(false);
                        setShowMain(true);
                    } else {
                    setShowMain(false); 
                    setShowBooksNav(false)
                    setShowChaptersNav(true);}}}
            >{chapterNum+1}</span>
        </h3>

        <li onClick={() => {
                if ((chapterNum + 1) !== libro.chapters.length){
                    setChapterNum(chapterNum + 1)
                } else {
                    if(bookNum !== 65){
                        setBookNum(bookNum+1)
                        setChapterNum(0)
                    }else {
                        setBookNum(0)
                        setChapterNum(0)
                    }
                }
            }
        }>+</li>

    
    </footer>
    </>
    );
}
 
export default App;