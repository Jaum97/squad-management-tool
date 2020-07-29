import styled from 'styled-components'

import { colors } from '../../../../styles/colors'

export const AvatarContainer = styled.div`
	align-items: center;
	background: ${colors.secondary};
	border-radius: 50%;
	display: flex;
	height: 88px;
	justify-content: center;
	width: 88px;
	z-index: 1;
`

export const PlaceholderContainer = styled.div`
	align-items: center;
	border-radius: 50%;
	border: 1px dashed grey;
	display: flex;
	flex-direction: column;
	height: 88px;
	justify-content: center;
	width: 88px;
`

export const PlayerPlaceholder = styled.div`
	align-items: center;
	background: #eeeeee80;
	border-radius: 50%;
	box-shadow: 1px 1px 1px #00000050;
	color: white;
	display: flex;
	flex-direction: column;
	font-size: 24px;
	height: 88px;
	justify-content: center;
	width: 88px;
	z-index: 1;
`
