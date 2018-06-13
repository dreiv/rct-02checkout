import React from 'react'
import PropTypes from 'prop-types'
import { pluralize } from '../../util/util'

const propTypes = {
	people: PropTypes.number,
}

const defaultProps = {
	people: 0,
}

export default function Meta(props) {
	const people = pluralize('person', props.people)

	return (
		<div className="WorkspaceMeta">
			<div className="Description">
				Entire office for <strong>{people}</strong>
			</div>
			<div className="Dates">
				<strong>Mon, Aug 22, 2016</strong> to <strong>Fri, Aug 29, 2016</strong>
			</div>
		</div>
	)
}

Meta.propTypes = propTypes
Meta.defaultProps = defaultProps
