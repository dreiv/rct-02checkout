import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'
import Checkout from './components/CheckoutArea/Checkout'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mounted: false,
			price: 320.0,
			tax: 20,
			duration: 5,
			discount: 5,
		}
	}

	componentDidMount() {
		;(() => this.setState({ mounted: true }))()
	}

	render() {
		let overlay
		let container

		if (this.state.mounted) {
			overlay = <div />
			container = (
				<Checkout
					duration={this.state.duration}
					discount={this.state.discount}
					tax={this.state.tax}
					price={this.state.price}
					onSubmit={this.handleSubmit}
				/>
			)
		}

		return (
			<div className="App">
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
