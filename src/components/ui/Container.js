import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node,
}

const defaultProps = {
	children: null,
}

export default function Container(props) {
	return <div className="Container">{props.children}</div>
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps
