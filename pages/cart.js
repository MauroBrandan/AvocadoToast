import React from 'react'
import { Divider } from 'semantic-ui-react'
import { CartItemList } from '../components/Cart/CartItemList'
import { CartSummary } from '../components/Cart/CartSummary'
import { useCart, useCartMutations } from '../context/Cart'

const CartPage = () => {
	const { items, subTotal } = useCart()
	const { removeFromCart } = useCartMutations()

	return (
		<>
			<CartItemList items={items} removeFromCart={removeFromCart} />
			<Divider />
			<CartSummary totalAmount={subTotal} />
		</>
	)
}

export default CartPage
