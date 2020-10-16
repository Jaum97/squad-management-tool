import React from 'react';

import { render } from '@testing-library/react';

import App from '../../App';

describe('My Teams Page', () => {
	it('Renders My Teams Section Header', () => {
		const { getByText } = render(<App />)
		const headerElement = getByText(/My teams/i)

		expect(headerElement).toBeInTheDocument()
	})

	it('Renders Top 5 Section Header', () => {
		const { getByText } = render(<App />)
		const headerElement = getByText(/Top 5/i)

		expect(headerElement).toBeInTheDocument()
	})

	it('Renders Most Picked Player', () => {
		const { getByText } = render(<App />)
		const mostPickedPlayerElement = getByText(/Most picked player/i)

		expect(mostPickedPlayerElement).toBeInTheDocument()
	})
})
