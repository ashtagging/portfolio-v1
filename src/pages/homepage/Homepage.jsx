import React, {useState} from 'react'
import Navbar from "../../components/navbar/Navbar.jsx"
import Introduction from '../introduction/Introduction.jsx';
import Portfolio from '../portfolio/Portfolio.jsx';
import Photos from '../photos/Photos.jsx';
import Contact from '../contact/Contact.jsx';
import Menu from '../../components/menu/Menu.jsx'
import About from '../about/About.jsx'
import "./homepage.scss"

function Homepage() {

  const[menuOpen,setMenuOpen]=useState(false);

  return (
    <div className="homepage">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main className="sections">
        <Introduction/>
        <About/>
        <Portfolio/>
        <Photos/>
        <Contact/>
      </main>
    </div>

  );
}

export default Homepage;