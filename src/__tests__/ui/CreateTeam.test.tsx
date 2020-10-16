import { createMemoryHistory } from 'history';
import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from '../../App';

describe('Create Team Page', () => {
	const check = (el: HTMLElement) => expect(el).toBeInTheDocument()

	it('Renders Team information', () => {
		const { getByText } = render(<App />)

		fireEvent.click(getByText(/\+/i))

		const nameHeader = getByText(/Team name/i)
		const descriptionHeader = getByText(/Description/i)
		const websiteHeader = getByText(/Team website/i)
		const typeHeader = getByText(/Team type/i)
		const tagsHeader = getByText(/Tags/i)

		const elements = [
			nameHeader,
			descriptionHeader,
			websiteHeader,
			typeHeader,
			tagsHeader
		]

		elements.forEach(check)
	})

	it('Renders Team information', () => {
		const { getByText } = render(<App />)

		const history = createMemoryHistory()

		history.push('/create-teams')

		const elements = [
			getByText(/Team name/i),
			getByText(/Description/i),
			getByText(/Team website/i),
			getByText(/Team type/i),
			getByText(/Tags/i)
		]

		elements.forEach(check)
	})

	describe('Configure Squad', () => {
		it('Renders formation select', () => {
			const { getByText } = render(<App />)

			const history = createMemoryHistory()

			history.push('/create-teams')

			const elements = [getByText('Formation')]

			elements.forEach(check)
		})
	})
})
