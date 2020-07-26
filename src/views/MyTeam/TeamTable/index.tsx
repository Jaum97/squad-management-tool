import React, { useState } from 'react'
import {
	TableWrapper,
	TableHeader,
	TableBody,
	TableBodyRow,
	TableCell,
	HeaderContentWrapper,
	TableHeaderRow,
	CellContentWrapper,
	CellIcon,
	CellToolTip
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TeamTable(): JSX.Element {
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
		const { header, order: oldOrder } = sortBy

		const shouldChangeOrder = header === field

		if (shouldChangeOrder) {
			const order = oldOrder === 'asc' ? 'desc' : 'asc'

			setSortBy((s) => ({ ...s, order }))

			return
		}

		setSortBy({ header: field, order: 'asc' })
	}

	const getIcon = (field: string) => {
		const { header, order } = sortBy

		const isBeignSorted = header === field

		if (!isBeignSorted) return 'sort'

		return order === 'asc' ? 'sort-up' : 'sort-down'
	}

	return (
		<TableWrapper>
			<thead>
				<TableHeaderRow>
					<TableHeader onClick={sortRows('name')}>
						<HeaderContentWrapper>
							Name
							<FontAwesomeIcon icon={getIcon('name')} />
						</HeaderContentWrapper>
					</TableHeader>
					<TableHeader onClick={sortRows('description')}>
						<HeaderContentWrapper>
							Description
							<FontAwesomeIcon icon={getIcon('description')} />
						</HeaderContentWrapper>
					</TableHeader>
				</TableHeaderRow>
			</thead>
			<TableBody>
				{mocked.sort(sortFn).map((item, i) => (
					<TableBodyRow key={i}>
						<TableCell>{item.name}</TableCell>
						<TableCell>
							<CellContentWrapper>
								{item.description}
								<div>
									<CellIcon
										onClick={() => console.log('1')}
										icon="trash"
										data-tip="Delete"
									/>
									<CellIcon
										onClick={() => console.log('2')}
										icon="share-alt"
										data-tip="Share"
									/>
									<CellIcon
										onClick={() => console.log('3')}
										icon="pencil-alt"
										data-tip="Edit"
									/>
									<CellToolTip />
								</div>
							</CellContentWrapper>
						</TableCell>
					</TableBodyRow>
				))}
			</TableBody>
		</TableWrapper>
	)
}

export default TeamTable
