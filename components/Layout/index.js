import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from 'semantic-ui-react'

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Container as='main' text>
				{children}
			</Container>
			<Footer />
		</>
	)
}
