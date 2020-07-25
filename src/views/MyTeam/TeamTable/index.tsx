import React from 'react'

// import IProps from './types'

function TeamTable(): JSX.Element {
	// const { data, updateResaleItem, updateResaleItemDate } = props

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
		}
	]

	return (
		<table className="resale-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{mocked.map((item) => (
					<tr>
						<td>{item.name}</td>
						<td>{item.description}</td>
					</tr>
				))}
				{/* {data.map((item: IResaleItem, i: number) => (
					<ResaleItem
						key={i}
						index={i}
						item={item}
						updateResaleItem={updateResaleItem}
						updateResaleItemDate={updateResaleItemDate}
					/>
				))} */}
			</tbody>
		</table>
	)
}

export default TeamTable
