import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Product() {
	const router = useRouter()
	const id = router.query.id
	const [avocado, setAvocado] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (id) {
			window
				.fetch(`/api/avo/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setAvocado(data)
					setLoading(false)
				})
		}
	}, [id])

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h1>Avocado: {avocado.name}</h1>
			<p>{avocado.attributes.description}</p>
		</div>
	)
}

export default Product
