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
import cogoToast from 'cogo-toast'
import { MOCKED_DATA } from './data'

const cogoOpts = { position: 'top-right' as 'top-right' }

function TeamTable(): JSX.Element {
	const [sortBy, setSortBy] = useState({ header: 'name', order: 'asc' })
	const [list, setList] = useState(MOCKED_DATA)

	const sortFn = (a: any, b: any) => {
		const { header, order } = sortBy

		const first = order === 'asc' ? a : b
		const second = order === 'asc' ? b : a

		return first[header].localeCompare(second[header])
	}

	const sortRowsBy = (field: string) => () => {
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

	const share = () => {
		cogoToast.error('Feature not yet implemented :/', cogoOpts)
	}

	const deleteTeam = (i: number) => () => {
		setList((l) => l.filter((_, i2) => i2 !== i))

		cogoToast.success('Team deleted successfully', cogoOpts)
	}

	return (
		<TableWrapper>
			<thead>
				<TableHeaderRow>
					<TableHeader onClick={sortRowsBy('name')}>
						<HeaderContentWrapper>
							Name
							<FontAwesomeIcon icon={getIcon('name')} />
						</HeaderContentWrapper>
					</TableHeader>
					<TableHeader onClick={sortRowsBy('description')}>
						<HeaderContentWrapper>
							Description
							<FontAwesomeIcon icon={getIcon('description')} />
						</HeaderContentWrapper>
					</TableHeader>
				</TableHeaderRow>
			</thead>
			<TableBody>
				{list.sort(sortFn).map((item, i) => (
					<TableBodyRow key={i}>
						<TableCell>{item.name}</TableCell>
						<TableCell>
							<CellContentWrapper>
								{item.description}
								<div>
									<CellIcon
										onClick={deleteTeam(i)}
										icon="trash"
										data-tip="Delete"
									/>
									<CellIcon
										onClick={share}
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
