export const useLinearGradient = (
	color1: string,
	color2: string,
	direction = 'to right'
) => {
	return `linear-gradient(${direction}, ${color1}, ${color2})`
}
