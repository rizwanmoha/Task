import React from 'react'
import './App.css';
import Homepage from './pages/Homepage';
import Table from './pages/Table';
import UserDetailsPage from './pages/UserDetailsPage';
import Form from './pages/Form';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (

    <>
      <Routes>
      <Route  path='/' element={<Homepage /> } />
      <Route  path='/table' element={<Table /> } />
      <Route  path='/forms' element={<Form /> } />
      <Route path='/table/:index'  element={<UserDetailsPage />} />
      </Routes>
      
    </>
  );
}

export default App;
