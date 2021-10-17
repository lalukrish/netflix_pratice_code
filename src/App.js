import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './RowPost/RowPost'
import { actions, originals } from './Urls'
function App() {
  return (
    <div className="App">
   <NavBar/>
   <Banner/>
   <RowPost Urls={originals}  title='Netflix originals'/>
   <RowPost Urls={actions} title='actions' isSmall/>
    </div>
  );
}

export default App;
