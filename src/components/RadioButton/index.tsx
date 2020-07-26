import React from 'react'
import { RadioInput, RadioOutline, RadioCheck, RadioLabel } from './styles'

// import IProps from './types'

function RadioButton(props: any): JSX.Element {
	const { checked, text, onChange } = props

	const htmlFor = `radio-input-${text}`

	const inputProps = {
		checked,
		id: htmlFor,
		onChange,
		type: 'radio',
		value: ''
	}

	return (
		<RadioLabel htmlFor={htmlFor}>
			<RadioInput {...inputProps} />
			<RadioOutline />
			<RadioCheck checked={checked} />
			{text}
		</RadioLabel>
	)
}

export default RadioButton
