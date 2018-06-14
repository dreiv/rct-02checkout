import React from 'react'
import PropTypes from 'prop-types'

function BasicInput(props) {
	return (
		<div className="BasicInput">
			<label htmlFor={props.name}>{props.label}</label>
			<input
				id={props.name}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	)
}

BasicInput.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
}

BasicInput.defaultProps = {
	name: '',
	label: '',
	type: '',
	placeholder: '',
}

function ExpiryDate() {
	return (
		<div className="ExpiryDate">
			<div>
				<h2>Expires on</h2>
				<div className="Expiry">
					<select>
						<option value="">January</option>
						<option value="">February</option>
						<option value="">March</option>
						<option value="">April</option>
						<option value="">May</option>
						<option value="">June</option>
						<option value="">July</option>
						<option value="">August</option>
						<option value="">September</option>
						<option value="">October</option>
						<option value="">November</option>
						<option value="">December</option>
					</select>
					<select name="" id="">
						<option value="">2016</option>
						<option value="">2017</option>
						<option value="">2018</option>
						<option value="">2019</option>
						<option value="">2020</option>
						<option value="">2021</option>
					</select>
				</div>
			</div>
			<div className="CVCField">
				<label>
					CVC<input placeholder="000" type="number" />
				</label>
			</div>
		</div>
	)
}

function CheckoutButton() {
	return (
		<div className="CheckoutButton">
			<button>Book securely</button>
			<span>
				<i className="fa fa-fw fa-lock" /> Your credit card information is
				encrypted
			</span>
		</div>
	)
}

function PaymentForm(props) {
	return (
		<div className="PaymentForm">
			<form onSubmit={props.onSubmit}>
				<div className="Title">Payment information</div>
				<BasicInput
					name="name"
					label="Name on credit card"
					type="text"
					placeholder="John Smith"
				/>
				<BasicInput
					name="card"
					label="Credit card number"
					type="number"
					placeholder="0000 0000 0000 0000"
				/>
				<ExpiryDate />
				<CheckoutButton />
			</form>
		</div>
	)
}

PaymentForm.propTypes = {
	onSubmit: PropTypes.func,
}

PaymentForm.defaultProps = {
	onSubmit: () => {},
}

export { BasicInput, ExpiryDate, PaymentForm, CheckoutButton }
