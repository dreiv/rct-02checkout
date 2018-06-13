/* stylelint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import Information from './Information'
import Meta from './Meta'

const propTypes = {
	image: PropTypes.string,
	price: PropTypes.number,
	people: PropTypes.number,
}

const defaultProps = {
	image: '',
	price: 0,
	people: 0,
}

export default function ImagePreview(props) {
	return (
		<div
			className="ImagePreview"
			style={{ backgroundImage: `url(${props.image})` }}
		>
			<div className="WorkspaceOverview">
				<Information
					name="Co-working Space, South Korea"
					price={props.price}
					duration="1"
				/>
				<Meta people={props.people} />
			</div>
		</div>
	)
}

ImagePreview.propTypes = propTypes
ImagePreview.defaultProps = defaultProps
