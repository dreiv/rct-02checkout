import React from 'react'
import PropTypes from 'prop-types'
import OrderSummary from './OrderSummary'
import PaymentForm from './PaymentForm'

const propTypes = {
	duration: PropTypes.string,
	price: PropTypes.number,
	discount: PropTypes.number,
	tax: PropTypes.number,
	onSubmit: PropTypes.func,
}

const defaultProps = {
	duration: 0,
	price: 0,
	discount: 0,
	tax: 0,
	onSubmit: () => {},
}

export default class Checkout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="Checkout">
				<OrderSummary
					duration={this.props.duration}
					discount={this.props.discount}
					tax={this.props.tax}
					price={this.props.price}
				/>
				<PaymentForm onSubmit={this.props.onSubmit} />
			</div>
		)
	}
}

Checkout.propTypes = propTypes
Checkout.defaultProps = defaultProps
