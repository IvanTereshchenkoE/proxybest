import React from 'react';
import Main from './pages/main/main';
import Header from './components/Header';
import AuthPage from './pages/auth/authPage';
import './App.css'
import RegPage from './pages/auth/regPage';

function App() {
  return (
    <div className="App">
      <RegPage/>
      <AuthPage />
      <Header />
      {/* <Main /> */}
    </div>
  );
}

export default App;
