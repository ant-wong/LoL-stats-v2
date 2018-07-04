import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class NotFound extends Component {
	render() {
		return (
			<section>
				<h1>We cannot locate that page.</h1>
			</section>
		)
	}
}

export default withRouter(NotFound)