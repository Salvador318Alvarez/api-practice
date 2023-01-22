import Header from "./components/Header";
import Main from "./components/Main";
import ChaptersNavbar from "./components/ChaptersNavbar";
import BooksNavbar from "./components/BooksNavbar";
import bible from "./data/Bible.json"
import { useState } from "react";

const App = () => {
    const [chapterNum, setChapterNum] = useState(0)
    const [bookNum, setBookNum] = useState(0)
    const libro = bible[bookNum]

    console.log(bookNum+1, bible.length);
    
    return ( 
    <>
    <Header />

    <Main libro={libro} chapterNum={chapterNum}/>
         
    <BooksNavbar/>
    <ChaptersNavbar />
    
    <footer className='footer'>
        
        <li onClick={
            (bookNum !== 0)?
            () => {
                setBookNum(bookNum - 1)
                setChapterNum(0)
            }:
            null
        }>--</li>

        <li onClick={
            (chapterNum !== 0)?
            () => {
                setChapterNum(chapterNum - 1);
            }:
            null
        }>--</li>

        <h3>
            <span className='choose-book'>{libro.book}</span>
            <span className='choose-chapter'>{chapterNum+1}</span>
        </h3>

        <li onClick={
            ((chapterNum+1) !== libro.chapters.length)?
            () => {setChapterNum(chapterNum + 1)}:
            null
        }>+</li>

        <li onClick={
                ((bookNum + 1) !== bible.length)?
                () => {setChapterNum(0); 
                setBookNum(bookNum + 1)}:
                null
        }>+</li>
    </footer>
    </>
    );
}
 
export default App;