import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const ProductsList = ({ products }) => {
	return (
		<Card.Group itemsPerRow={2} stackable>
			{products.map(({ name, id, price, image }) => (
				<Card key={id} header={name} image={image} description={`$ ${price}`} />
			))}
		</Card.Group>
	)
}
