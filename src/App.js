import './App.scss';
import MainPage from './components/MainPage'
import React from 'react'
import GeneralState from './context/generalState'


function App() {
  return (
    <GeneralState>
      <MainPage/>
    </GeneralState>
  )
}

export default App;
