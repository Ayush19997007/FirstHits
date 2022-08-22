import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
<li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/business">business</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/entertainment">entertainment</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/general">general</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/health">health</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/science">science</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/sports">sports</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/technology">technology</a>
  </li>

      </ul>
    </div>
  </div>
</nav>

      </div>
    )
  }
}

export default Navbar