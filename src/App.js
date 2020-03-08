import React from 'react';
import logo from './logo.svg';
import './App.scss';
// My components
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
// ===================================
export default App;
// ===================================
function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
}
