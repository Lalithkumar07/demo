import React from 'react'
import './Navbar.css'
import{ Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='run'>
         
        <nav>

            <ul>
              <Link to="/"><li>Home</li></Link> 
              <Link to="/work"><li>Work</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/todolist"><li>Todolist</li></Link>

               
            </ul>
        </nav>

    </div>
  )
}

export default Nav