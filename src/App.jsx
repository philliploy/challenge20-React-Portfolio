import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Resume from './pages/resume'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Navbar from './components/Navbar'
import Contact from './pages/contact'
 
 

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <>
       <Navbar handlePageChange={handlePageChange} currentPage={currentPage}/>
       {renderPage()}
   

    </>
  )
}

export default App
