import { FC, useEffect, useRef, useState } from 'react'
import './App.css'
import { addNewUser, getUsersDataAxios, } from './Services/Services';
import { Gallery } from './Components/Gallery';
import { AddUserForm } from './Components/AddUserForm';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Datasets from './Components/Datasets';
import Home from './Components/Home';
import { SinglePrediction } from './Components/SinglePrediction';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SinglePrediction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/datasets" element={<Datasets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
