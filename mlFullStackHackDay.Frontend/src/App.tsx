import { FC, useEffect, useRef, useState } from 'react'
import './App.css'
import { addNewUser, getUsersDataAxios, INewUser, ISentence, IUser, } from './Services/Services';
import { Gallery } from './Components/Gallery';
import { AddUserForm } from './Components/AddUserForm';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Datasets from './Components/Datasets';
import Home from './Components/Home';

const App: FC = () => {

  return (
    // <div className="App">
    //   {/* <h1 className='App-h1'>Sentiment.AI</h1> */}
    //   <div className="App-div">
        <BrowserRouter>
          <Navbar />
        {/* <div className='navTest'>
        </div> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datasets" element={<Datasets />} />
          </Routes>
        </BrowserRouter>
    //   </div>
    // </div>
  )
}

export default App
