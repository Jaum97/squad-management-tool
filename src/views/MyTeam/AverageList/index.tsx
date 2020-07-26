import React from 'react'

// import IProps from './types'

function AverageList(): JSX.Element {
	// const { data, updateResaleItem, updateResaleItemDate } = props

	const mocked = [
		{
			name: 'barcelona',
			value: 31.9
		},
		{
			name: 'realmadrid',
			value: 31.6
		},
		{
			name: 'milan',
			value: 31.5
		},
		{
			name: 'milan',
			value: 35.1
		}
	]

	return (
		<div>
			<p>Title</p>
			<ul>
				{mocked.map((item, i) => (
					<li key={i}>
						<span>{item.name}</span>
						<span>{item.value}</span>
					</li>
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
			</ul>
		</div>
	)
}

export default AverageList
