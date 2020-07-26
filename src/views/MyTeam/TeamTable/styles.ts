import styled from 'styled-components'

export const TableWrapper = styled.table`
	width: 100%;
	border-collapse: collapse;
`

export const TableHeader = styled.th`
	padding: 16px 16px 8px 16px;
	/* border-bottom: 1px solid #eeeeee; */
	text-align: left;
	font-size: 0.875em;
	color: #272927;
`

export const TableBody = styled.tbody``

export const TableCell = styled.td`
	padding: 16px;
	font-size: 1rem;
	color: #272927;
	box-sizing: border-box;
	font-weight: 700;
	border-bottom: 1px solid #eeeeee;
`

export const TableBodyRow = styled.tr`
	&:hover {
		background: #e2c1d390;
		border-radius: 8px;

		${TableCell} {
			color: #b04c8a;
            border-bottom: 1px solid transparent;
            &:first-child {
				border-radius: 6px 0px 0px 6px;
			}
            &:last-child {
				border-radius: 0px 6px 6px 0px;
			}
		}
	}
`
