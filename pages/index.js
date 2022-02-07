import React, { useState, useEffect } from 'react'

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
		<div>
			<h1>Avocado Toast</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Home
