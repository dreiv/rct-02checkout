/* stylelint-disable */

import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import './App.css'
import Checkout from './components/CheckoutArea/Checkout'
import Overlay from './components/ui/Overlay'
import Container from './components/ui/Container'
import Header from './components/ui/Header'
import ImagePreview from './components/ImagePreview/ImagePreview'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mounted: false,
			people: 1,
			price: 320.0,
			tax: 20,
			duration: 5,
			discount: 5,
		}
	}

	componentDidMount() {
		;(() => this.setState({ mounted: true }))()
	}

	handleChange = evt => {
		this.setState({ duration: +evt.target.value })
	}

	render() {
		let overlay
		let container

		if (this.state.mounted) {
			overlay = (
				<Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
			)
			container = (
				<Container>
					<ImagePreview
						price={this.state.price}
						duration={this.state.duration}
						people={this.state.people}
						image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"
					/>
					<Checkout
						duration={this.state.duration}
						discount={this.state.discount}
						tax={this.state.tax}
						price={this.state.price}
						onSubmit={this.handleSubmit}
					/>
				</Container>
			)
		}

		return (
			<div className="App">
				<Header onChange={this.handleChange} />
				<ReactCSSTransitionGroup
					transitionName="overlay"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{overlay}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
					transitionName="container"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{container}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}
