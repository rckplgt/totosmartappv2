import React from 'react'
import {Alert, Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
        <Header/>
        <main className="py-3">
        <h1>Welcome to Totosmart</h1>
        <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default App
