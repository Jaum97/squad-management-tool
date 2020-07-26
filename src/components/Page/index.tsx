import React, { Fragment } from 'react'
import Header from '../header'
import { Main, Footer } from './styles'

function Page({ children }: any) {
	return (
		<Fragment>
			<Header />
			<Main>{children}</Main>
			<Footer>2020 - All rights reserved</Footer>
		</Fragment>
	)
}

export default Page
