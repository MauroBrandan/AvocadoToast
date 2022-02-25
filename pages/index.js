import React, { useState, useEffect } from 'react'
import { CallToAction } from '../components/CallToAction'
import { ProductsList } from '../components/ProductsList'

function Home() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		window
			.fetch('/api/avo')
			.then((response) => response.json())
			.then(({ data }) => {
				setProducts(data)
			})
	}, [])

	return (
		<>
			<CallToAction url='/about'>5 Surprising Facts About Avocados</CallToAction>
			<ProductsList products={products} />
		</>
	)
}

export default Home
