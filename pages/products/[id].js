import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'
import { ProductDetail } from '../../components/ProductDetail'

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
		return (
			<Segment style={{ height: '100%', border: 'none', boxShadow: 'none' }}>
				<Dimmer active inverted>
					<Loader size='large'>Loading</Loader>
				</Dimmer>
			</Segment>
		)
	}

	return (
		<div>
			<ProductDetail product={avocado} />
		</div>
	)
}

export default Product
