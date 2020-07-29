import React from 'react'

import { ImageHolder, LogoWrapper, PageHeader, Title, Wrapper } from './styles'
import { useHistory, useLocation } from 'react-router-dom'
import { routesEnum } from '../../routes/enum'

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
				<LogoWrapper onClick={changeRoute}>
					<ImageHolder src={logoSrc} alt="logo" />
				</LogoWrapper>
				<Title>{'Squad Management Tool'}</Title>
			</PageHeader>
		</Wrapper>
	)
}

export default Header
