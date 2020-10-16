import React from 'react'

import { RadioCheck, RadioInput, RadioLabel, RadioOutline } from './styles'
import { IProps } from './types'

function RadioButton(props: IProps): JSX.Element {
	const { checked, text, onChange } = props

	const htmlFor = `radio-input-${text}`

	const inputProps = {
		checked,
		id: htmlFor,
		onClick: onChange as any,
		type: 'radio',
		value: text
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
