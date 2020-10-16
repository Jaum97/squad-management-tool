import React, { Fragment } from 'react';

import Header from '../header';
import { Footer, Main } from './styles';

function Page({ children }: { children: JSX.Element }) {
	return (
		<Fragment>
			<Header />
			<Main>{children}</Main>
			<Footer>2020 - All rights reserved</Footer>
		</Fragment>
	)
}

export default Page
