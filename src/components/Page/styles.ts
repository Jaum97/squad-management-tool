import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Main = styled.main`
	bottom: 40px;
	overflow-y: scroll;
	padding: 24px;
	position: fixed;
	top: 78px;
	right: 0;
	left: 0;
	background-color: #f9f9f9;
	/* width: 100%; */
`

export const Footer = styled.footer`
	align-content: center;
	background-color: #dcdcdc;
	bottom: 0;
	color: ${colors.darkGrey};
	display: flex;
	flex-direction: column;
	font-size: 14px;
	font-weight: 400;
	height: 40px;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	text-align: center;
`
