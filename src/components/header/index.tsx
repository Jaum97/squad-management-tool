import React from 'react'

import { ImageHolder, LogoWrapper, PageHeader, Title, Wrapper } from './styles'

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
