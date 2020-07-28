import styled from 'styled-components'

import { colors } from '../../../../styles/colors'

export const AvatarContainer = styled.div`
	background: ${colors.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin: 16px 0px;
	width: 88px;
	height: 88px;
`

export const PlaceholderContainer = styled.div`
	align-items: center;
	border-radius: 50%;
	border: 1px dashed grey;
	display: flex;
	flex-direction: column;
	height: 88px;
	justify-content: center;
	margin: 16px 0px;
	width: 88px;
`

export const PlayerPlaceholder = styled.div`
	background: #eeeeee80;

	display: flex;
	color: white;
	box-shadow: 1px 1px 1px #00000050;
	font-size: 24px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80px;
	width: 80px;
	border-radius: 50%;
`
