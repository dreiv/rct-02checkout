import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	image: PropTypes.string,
}

const defaultProps = {
	image: '',
}

export default function Overlay(props) {
	return (
		<div className="Overlay" style={{ backgroundImage: `url(${props.image})` }}>
			Something
		</div>
	)
}

Overlay.propTypes = propTypes
Overlay.defaultProps = defaultProps
