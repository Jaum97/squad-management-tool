export const getInitials = (name: string): string => {
	const initials = name
		.split(/\s/)
		.map((part) => part.substring(0, 1).toUpperCase())
		.filter((v) => !!v)

	const first = initials[0]

	const last = initials[initials.length - 1]

	return (first + last).toUpperCase()
}
