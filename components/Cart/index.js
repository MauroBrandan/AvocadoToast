import React from 'react'
import CartIcon from '../Icons/Cart'

export const Cart = ({ cartCount, name }) => {
	const showCartCount = () => {
		if (!cartCount) {
			return `(0)`
		}
		if (cartCount > 9) {
			return (
				<span>
					9<sup>+</sup>
				</span>
			)
		}
		return `(${cartCount})`
	}

	return (
		<div className='container'>
			<CartIcon />
			<div className='text'>{showCartCount()}</div>
			<style jsx>{`
				.container {
					display: flex;
					align-items: center;
				}
				.text {
					margin-left: 0.5rem;
				}
				.text span {
					font-size: smaller;
				}
			`}</style>
		</div>
	)
}
