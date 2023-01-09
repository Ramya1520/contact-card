import './App.css';
import React, { useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/Contacts/ContactList/ContactList';
import ContactProvider from './context/ContactContext';

let App=()=> {
  return (
    <React.Fragment>
      <ContactProvider>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
      </Routes>
      </ContactProvider>
    </React.Fragment>
  );
}

export default App;
