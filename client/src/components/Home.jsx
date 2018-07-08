import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class Home extends Component {
	render() {
		return (
			<div>
				{/* BUILD A SEARCH INPUT */}
				<h1 onClick={() => {this.props.getUser('BFY Meowington')}}>test</h1>
				<a className="btn-floating btn-large waves-effect waves-light red" onClick={() => {this.props.getMatches(this.props.player.accountId)}}>
					<i className="material-icons">add</i>
				</a>
			</div>
		)
	}
}

export default withRouter(Home)