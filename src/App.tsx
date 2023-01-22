import ChaptersNavbar from "./components/ChaptersNavbar";
import bible from "./data/Bible.json"
import { useState } from "react";

const App = () => {
    const [chapterNum, setChapterNum] = useState(0)
    const [bookNum, setBookNum] = useState(0)
    
    const [showMain, setShowMain] = useState(false)
    const [showBooksNav, setShowBooksNav] = useState(true)
    const [showChaptersNav, setShowChaptersNav] = useState(false)
    const libro = bible[bookNum]

    console.log(bookNum+1, bible.length);
    
    return ( 
    <>
    <header className='header'>
        <h1 className='main-title'>KJV App</h1>
        <input 
            className="search"
            type="text"
            placeholder="search"
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

        <li onClick={
            (chapterNum !== 0)?
            () => {
                setChapterNum(chapterNum - 1);
            }:
            null
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

        <li onClick={
            ((chapterNum+1) !== libro.chapters.length)?
            () => {setChapterNum(chapterNum + 1)}:
            null
        }>+</li>

    
    </footer>
    </>
    );
}
 
export default App;