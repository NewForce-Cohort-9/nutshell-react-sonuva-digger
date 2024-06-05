// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import './NavBar.css'

function NavBar() {

  return (
    <div className="navbar-container">
      <Nav pills>
        <NavItem className="navbar-logo">
          <NavLink
            href="http://localhost:5173/"
          >
            <img src='https://primalrc.com/assets/landing-son-uva-digger-highlights.png' alt='Logo' className='logo-img'/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="http://localhost:5173/news"
          >
            News
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="http://localhost:5173/events"
          >
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="http://localhost:5173/tasks"
          >
            Tasks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="http://localhost:5173/chat"
          >
            Live Chat
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="http://localhost:5173/profile"
          >
            Profile
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default NavBar
