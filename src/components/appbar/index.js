import React from 'react'
import Materias from '../materias'

export default function ButtonAppBar () {
  return (
    <>
      <nav>
        <div className="nav-wrapper red accent-4">

          <span className="brand-logo"><i><Materias /></i>Braining App</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/sdvsfv">Login</a></li>
            <li><a href="/sfgsdfg">Sobre</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
