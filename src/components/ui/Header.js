import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	onChange: PropTypes.func,
}

const defaultProps = {
	onChange: () => {},
}

export default function Header(props) {
	return (
		<header>
			<input
				onChange={props.onChange}
				type="range"
				max="100"
				min="1"
				step="1"
			/>
		</header>
	)
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps
