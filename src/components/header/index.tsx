import React from 'react'
import { Wrapper, PageHeader, LogoWrapper, ImageHolder, Title } from './styles'

const logoSrc = require('../../assets/logo_venturus-small.png')

function Header(): JSX.Element {
	return (
		<Wrapper>
			<PageHeader>
				<LogoWrapper>
					<ImageHolder src={logoSrc} alt="logo" />
				</LogoWrapper>
				<Title>{'Squad Management Tool'}</Title>
			</PageHeader>
		</Wrapper>
	)
}

export default Header
