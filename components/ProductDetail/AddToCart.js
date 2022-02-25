import React, { useState } from 'react'
import { Input, Icon, Transition } from 'semantic-ui-react'
import { useCartMutations } from '../../context/Cart'

// Fake a server response
const addToCartRequest = () =>
	new Promise((resolve, reject) => {
		window.setTimeout(resolve, 600)
	})

const validate = (quantity) => {
	let error = ''
	if (quantity < 1 || isNaN(quantity)) error = "Can't be empty"

	return error
}

export const AddToCart = ({ product }) => {
	const [quantity, setQuantity] = useState(1)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { addToCart } = useCartMutations()

	const handleChange = ({ target }) => {
		setQuantity(parseInt(target.value, 10))
	}

	const handelSubmit = () => {
		const error = validate(quantity)
		setError(error)

		if (!error) {
			setLoading(true)
			addToCartRequest()
				.then(() => {
					addToCart(product, quantity)
					setLoading(false)
					setQuantity(quantity)
				})
				.catch((err) => {
					setError(`Error: ${err}` || 'Something went wrong')
					setLoading(false)
				})
		}
	}

	return (
		<>
			<Input
				type='number'
				placeholder='Quantity'
				value={quantity}
				min={1}
				step={1}
				onChange={handleChange}
				action={{
					color: 'green',
					icon: 'plus cart',
					content: 'Add To Cart',
					onClick: handelSubmit,
					loading,
					disabled: loading,
				}}
			/>

			{error && <div style={{ color: 'red', position: 'absolute' }}>{error}</div>}

			<Transition duration={{ hide: 500, show: 500 }} visible={loading}>
				<div style={{ color: 'green', position: 'absolute' }}>
					<Icon name='check' />
					Added to cart
				</div>
			</Transition>
		</>
	)
}
