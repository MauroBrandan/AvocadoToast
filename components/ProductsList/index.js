import React from 'react'
import Link from 'next/link'
import { Card } from 'semantic-ui-react'

export const ProductsList = ({ products }) => {
	return (
		<Card.Group itemsPerRow={2} stackable>
			{products.map(({ name, id, price, image }) => (
				<Link key={id} href='/products/[id]' as={`/products/${id}`}>
					<Card header={name} image={image} description={`$ ${price}`} />
				</Link>
			))}
		</Card.Group>
	)
}
