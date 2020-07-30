import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { routesEnum } from '../../routes/enum'
import {
	Container,
	ContainerAppTitle,
	ImageHolder,
	LogoWrapper,
	PageHeader,
	Title,
	UserAvatar,
	UserAvatarContainer,
	UserName,
	Wrapper
} from './styles'

const logoSrc = require('../../assets/logo_venturus-small.png')

function Header(): JSX.Element {
	const history = useHistory()
	const location = useLocation()

	const { CREATE_TEAM, MY_TEAMS } = routesEnum

	const { pathname } = location

	const routeToGo = pathname === CREATE_TEAM ? MY_TEAMS : CREATE_TEAM

	const changeRoute = () => history.push(routeToGo)

	return (
		<Wrapper>
			<PageHeader>
				<ContainerAppTitle>
					<LogoWrapper onClick={changeRoute}>
						<ImageHolder src={logoSrc} alt="logo" />
					</LogoWrapper>
					<Title>{'Squad Management Tool'}</Title>
				</ContainerAppTitle>
				<Container>
					<UserName>{'John Doe'}</UserName>
					<UserAvatarContainer>
						<UserAvatar title=" " round name="John Doe" size="56" />
					</UserAvatarContainer>
				</Container>
			</PageHeader>
		</Wrapper>
	)
}

export default Header
