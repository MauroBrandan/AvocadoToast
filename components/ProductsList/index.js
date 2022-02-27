import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'semantic-ui-react'

export const ProductsList = ({ products }) => {
	return (
		<Card.Group itemsPerRow={2} stackable>
			{products.map(({ name, id, price, image }) => (
				<Link key={id} href={`/products/${id}`}>
					<Card
						header={name}
						image={<Image src={image} width={333} height={333} />}
						description={`$ ${price}`}
					/>
				</Link>
			))}
		</Card.Group>
	)
}
