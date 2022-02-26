import React, { useState, useEffect } from 'react'
import { CallToAction } from '../components/CallToAction'
import { ProductsList } from '../components/ProductsList'

export const getStaticProps = async () => {
	const response = await fetch('https://avocado-toast.vercel.app/api/avo')
	const { data } = await response.json()
	return {
		props: {
			productList: data,
		},
	}
}

function Home({ productList }) {
	return (
		<>
			<CallToAction url='/about'>5 Surprising Facts About Avocados</CallToAction>
			<ProductsList products={productList} />
		</>
	)
}

export default Home
