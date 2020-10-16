import Avatar from 'react-avatar';
import styled from 'styled-components';

import { useLinearGradient } from '../../shared/utils/styles';
import { colors } from '../../styles/colors';

export const Wrapper = styled.header`
	background: ${useLinearGradient(colors.secondary + ' 75%', colors.primary)};
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
`

export const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height: 78px;
`

export const ContainerAppTitle = styled(Container)`
	@media (max-width: 768px) {
		display: none;
	}
`

export const PageHeader = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 78px;
	@media (max-width: 768px) {
		justify-content: center;
	}
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
export const UserName = styled.p`
	color: white;
	font-size: 18px;
`
export const UserAvatarContainer = styled.div`
	padding: 4px 16px 4px 8px;
	justify-self: flex-end;
	align-items: center;
	border-radius: 50%;
	display: flex;
	height: 64px;
	justify-content: center;
	width: 64px;
	z-index: 1;
`

export const UserAvatar = styled(Avatar)`
	background: white !important;
	font-weight: 500 !important;
	color: ${colors.darkGrey} !important;
`
