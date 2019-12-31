import React from "react"
import Link from 'gatsby-link'

const Menu = () => (
  <div style={{
    background: 'white',
    paddingTop: '5px'
  }}>

    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page-1">Section 1</Link></li>
      <li><Link to="/page-2">Section 2</Link></li>
      <li><Link to="/page-3">Section 3</Link></li>
      <li><Link to="/page-4">Section 4</Link></li>
      <li><Link to="/page-20">BeSO</Link></li>
      <li><Link to="/about">About</Link></li>

    </ul>
  </div>
)
export default Menu
