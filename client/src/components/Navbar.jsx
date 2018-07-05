import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
		      <Link to='/'>
						<h2>LoL</h2>
					</Link>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="sass.html">Sass</a></li>
		        <li><a href="badges.html">Components</a></li>
		        <li><a href="collapsible.html">JavaScript</a></li>
		      </ul>
		    </div>
			</nav>
		)
	}
}