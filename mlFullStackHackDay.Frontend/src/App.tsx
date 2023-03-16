import { FC, useEffect, useRef, useState } from 'react'
import './App.css'
import { addNewUser, getUsersDataAxios, INewUser, ISentence, IUser, } from './Services/Services';
import { Gallery } from './Components/Gallery';
import { AddUserForm } from './Components/AddUserForm';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Datasets from './Components/Datasets';

const App: FC = () => {

  return (
    <div className="App">
      <h1 className='App-h1'>Sentiment.AI</h1>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/datasets" element={<Datasets />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
