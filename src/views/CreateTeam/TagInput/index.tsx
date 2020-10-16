import React, { KeyboardEvent, useRef } from 'react';

import {
    InputTagButton, InputTagContainer, InputTagInput, InputTagInputContainer, InputTagList,
    InputTagListItem
} from './styles';
import { IProps } from './types';

function InputTag(props: IProps) {
	const { tags, removeTag, addTag } = props

	let inputRef = useRef()

	const inputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		const { key } = e
		const { value } = e.target as any

		const wantsToAdd = (key === 'Enter' || key === ';') && value

		if (wantsToAdd) {
			const lower = (x: string) => x.toLowerCase()

			const tagExists = (tag: string) => lower(tag) === lower(value)

			if (tags.find(tagExists)) return

			addTag(value)

			if (!inputRef?.current) return
			;(inputRef.current as any).value = null
		}

		if (key === 'Backspace' && !value) {
			removeTag(tags.length - 1)()
		}
	}

	return (
		<InputTagContainer>
			<InputTagList>
				{tags.map((tag, i: number) => (
					<InputTagListItem key={i}>
						{tag}
						<InputTagButton onClick={removeTag(i)}>
							{'+'}
						</InputTagButton>
					</InputTagListItem>
				))}
				<InputTagInputContainer>
					<InputTagInput
						ref={inputRef as any}
						onKeyDown={inputKeyDown}
					/>
				</InputTagInputContainer>
			</InputTagList>
		</InputTagContainer>
	)
}

export default InputTag
