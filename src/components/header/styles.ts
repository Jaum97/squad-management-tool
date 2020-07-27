import styled from 'styled-components'

import { useLinearGradient } from '../../shared/utils/styles'
import { colors } from '../../styles/colors'

export const Wrapper = styled.header`
	background: ${useLinearGradient(colors.secondary + ' 75%', colors.primary)};
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
`

export const PageHeader = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height: 78px;
`

export const LogoWrapper = styled.div`
	cursor: pointer;
	padding: 4px 16px 4px 36px;
`

export const ImageHolder = styled.img`
	height: 56px;
	width: 56px;
`

export const Title = styled.p`
	color: white;
	font-size: 24px;
`
