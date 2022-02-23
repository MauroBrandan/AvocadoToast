import React from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'
import Avocado from '../Icons/Avocado'
import Cart from '../Icons/Cart'

export const Header = () => {
	return (
		<>
			<Menu size='huge' borderless pointing as='header'>
				<Link href='/' passHref>
					<Menu.Item title='Inicio | Todos los productos'>
						<Avocado />
						<h1>Avocado Toast</h1>
					</Menu.Item>
				</Link>
				<Link href='/cart'>
					<Menu.Item position='right'>
						<Cart />
					</Menu.Item>
				</Link>
			</Menu>

			<style jsx>{`
				h1 {
					margin: 0;
				}
			`}</style>
		</>
	)
}
