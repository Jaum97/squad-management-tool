import styled from 'styled-components';

import { colors } from '../../../../styles/colors';

export const AvatarContainer = styled.div`
	align-items: center;
	border-radius: 50%;
	border: 1px dashed ${colors.grey};
	display: flex;
	height: 90px;
	justify-content: center;
	width: 90px;
	z-index: 1;
`

export const PlaceholderContainer = styled.div<{ dim: boolean }>`
	align-items: center;
	border-radius: 50%;
	border: 1px dashed ${colors.grey};
	display: flex;
	flex-direction: column;
	height: 90px;
	justify-content: center;
	opacity: ${({ dim }) => (dim ? 0.5 : 1)};
	width: 90px;
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
	height: 82px;
	justify-content: center;
	width: 82px;
	z-index: 1;
`
