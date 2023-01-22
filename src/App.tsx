import Header from "./components/Header";
import Main from "./components/Main";
import ChaptersNavbar from "./components/ChaptersNavbar";
import BooksNavbar from "./components/BooksNavbar";
import bible from "./data/Bible.json"
import { useState } from "react";

const App = () => {
    const [capitulo, setCapitulo] = useState(0)
    const [bibleNum, setBibleNum] = useState(0)
    const libro = bible[bibleNum]

    return ( 
    <>
    <Header />

    <Main bible={bible} libro={libro} capitulo={capitulo}/>
         
    <BooksNavbar/>
    <ChaptersNavbar />
    
    <footer className='footer'>
        <li onClick={
            () => setBibleNum(bibleNum - 1)
        }>--</li>
        <li onClick={
            (capitulo !== 0)?
            () => setCapitulo(capitulo - 1):
            null
        }>--</li>
        <h3>
            <span className='choose-book'>{libro.book}</span>
            <span className='choose-chapter'>{capitulo+1}</span>
        </h3>

        <li onClick={
            () => {setCapitulo(capitulo + 1)}
        }>+</li>
        <li onClick={
            () => {setBibleNum(bibleNum + 1)}
        }>+</li>
    </footer>
    </>
    );
}
 
export default App;