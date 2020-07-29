import styled from 'styled-components'
import { IGridProps } from './types'

export const breakPoints = {
	sm: 768,
	md: 992,
	lg: 1200
}

function getWidthString(span: string | number) {
	if (!span) return

	let width = (Number(span) / 12) * 100

	return `width: ${width}%;`
}

export const Row = styled.div`
	&::after {
		content: '';
		clear: both;
		display: table;
	}
`

export const Column = styled.div<IGridProps>`
	float: left;
	width: 100%;
	${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

	@media only screen and (min-width: 768px) {
		${({ sm }) => sm && getWidthString(sm)};
	}

	@media only screen and (min-width: 992px) {
		${({ md }) => md && getWidthString(md)};
	}

	@media only screen and (min-width: 1200px) {
		${({ lg }) => lg && getWidthString(lg)};
	}
`
