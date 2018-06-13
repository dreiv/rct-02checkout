import React from 'react'
import PropTypes from 'prop-types'
import { pluralize } from '../../util/util'

const propTypes = {
	duration: PropTypes.number,
	name: PropTypes.number,
	price: PropTypes.number,
}

const defaultProps = {
	duration: 0,
	name: 0,
	price: 0,
}

export default function Information(props) {
	const duration = `${props.duration} day${pluralize(props.duration)}`

	return (
		<div className="WorkspaceInformation">
			<div className="WorkspaceName">{props.name}</div>
			<div className="WorkspacePrice">
				<div className="Price">{props.price} GBP</div>
				<div className="Duration">/ {duration}</div>
			</div>
		</div>
	)
}

Information.propTypes = propTypes
Information.defaultProps = defaultProps
