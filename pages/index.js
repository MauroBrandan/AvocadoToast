import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
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
		<Layout>
			<ProductsList products={products} />
		</Layout>
	)
}

export default Home
