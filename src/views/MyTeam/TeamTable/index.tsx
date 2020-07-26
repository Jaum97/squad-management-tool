import React, { useState } from 'react'
import {
	TableWrapper,
	TableHeader,
	TableBody,
	TableBodyRow,
	TableCell
} from './styles'

// import IProps from './types'

function TeamTable(): JSX.Element {
	// const { data, updateResaleItem, updateResaleItemDate } = props

	const [sortBy, setSortBy] = useState({ header: 'name', order: 'asc' })

	const mocked = [
		{
			name: 'barcelona',
			description: 'barcelonaSquad'
		},
		{
			name: 'realmadrid',
			description: 'realmadridSquad'
		},
		{
			name: 'milan',
			description: 'milanSquad'
		},
		{
			name: 'milan',
			description: 'milanSquad'
		},
		{
			name: 'milan',
			description: 'milanSquad'
		},
		{
			name: 'milan',
			description: 'milanSquad'
		},
		{
			name: 'milan',
			description: 'milanSquad'
		},
		{
			name: 'amiguinhos',
			description: 'amiguinhosSquad'
		},
		{
			name: 'amiguinhos',
			description: 'zSquad'
		}
	]

	const sortFn = (a: any, b: any) => {
		const { header, order } = sortBy

		const first = order === 'asc' ? a : b
		const second = order === 'asc' ? b : a

		return first[header].localeCompare(second[header])
	}

	const sortRows = (field: string) => () => {
		const changeOrder = sortBy.header === field

		if (changeOrder) {
			return setSortBy((s) => ({
				...s,
				order: s.order === 'asc' ? 'desc' : 'asc'
			}))
		}

		setSortBy({ header: field, order: 'asc' })
	}

	return (
		<TableWrapper>
			<thead>
				<tr>
					<TableHeader onClick={sortRows('name')}>Name</TableHeader>
					<TableHeader onClick={sortRows('description')}>
						Description
					</TableHeader>
				</tr>
			</thead>
			<TableBody>
				{mocked.sort(sortFn).map((item, i) => (
					<TableBodyRow key={i}>
						<TableCell>{item.name}</TableCell>
						<TableCell>{item.description}</TableCell>
					</TableBodyRow>
				))}
			</TableBody>
		</TableWrapper>
	)
}

export default TeamTable
