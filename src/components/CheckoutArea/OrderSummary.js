import React from 'react'
import PropTypes from 'prop-types'
import { pluralize } from '../../util/util'

const propTypes = {
	duration: PropTypes.string,
	price: PropTypes.number,
	discount: PropTypes.number,
	tax: PropTypes.number,
}

const defaultProps = {
	duration: 0,
	price: 0,
	discount: 0,
	tax: 0,
}

export default function OrderSummary(props) {
	const duration = `${props.duration} day${pluralize(props.duration)}`
	const initialTotal = props.duration * props.price
	const discount = Math.floor((initialTotal / 100) * props.discount)
	const subTotal = initialTotal - discount
	const tax = Math.floor((subTotal / 100) * props.tax)
	const total = subTotal + tax

	return (
		<div>
			<div className="title">Order Summary</div>
			<table>
				<tbody>
					<tr>
						<td>{`${props.price} x ${duration}`}</td>
						<td>{initialTotal}</td>
					</tr>
					<tr>
						<td>Discount</td>
						<td>{`${discount} GBP`}</td>
					</tr>
					<tr>
						<td>Subtotal</td>
						<td>{`${subTotal} GBP`}</td>
					</tr>
					<tr>
						<td>Tax</td>
						<td>{`${tax} GBP`}</td>
					</tr>
				</tbody>
			</table>
			<div className="Total">
				<div className="TotalLabel">Total</div>
				<div className="Amount">
					{total} <small>GBP</small>
				</div>
			</div>
		</div>
	)
}

OrderSummary.propTypes = propTypes
OrderSummary.defaultProps = defaultProps
