import React, { useState } from 'react'
import { Segment, Button, Modal, Icon } from 'semantic-ui-react'
import Avocado from '../Icons/Avocado'
import { useCartMutations } from '../../context/Cart'

export const CartSummary = ({ totalAmount }) => {
	const [openModal, setOpenModal] = useState(false)
	const { clearCart } = useCartMutations()

	const handleClick = () => {
		setOpenModal(!openModal)
		clearCart()
	}

	return (
		<>
			<Segment clearing size='large' as='section'>
				<span>
					<strong>Sub total:</strong>
					{` $ ${totalAmount}`}
				</span>
				<Button color='green' floated='right' onClick={handleClick}>
					Buy
				</Button>
			</Segment>

			<Modal onClose={handleClick} open={openModal}>
				<Modal.Header style={{ display: 'flex', alignItems: 'center' }}>
					<Avocado /> Avocado Toast
				</Modal.Header>

				<Modal.Content style={{ textAlign: 'center' }}>
					<Icon name='heart' color='green' />
					Thanks for your purchase
					<Icon name='heart' color='green' />
				</Modal.Content>

				<Modal.Actions style={{ textAlign: 'center' }}>
					<Button content='Done' icon='checkmark' onClick={handleClick} positive />
				</Modal.Actions>
			</Modal>
		</>
	)
}
