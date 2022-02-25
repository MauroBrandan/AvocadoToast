import React from 'react'
import Link from 'next/link'
import { Button, Icon } from 'semantic-ui-react'

export const CallToAction = ({ children, url }) => {
	return (
		<>
			<div>
				<Link href={url}>
					<Button animated color='green'>
						<Button.Content visible>{children}</Button.Content>
						<Button.Content hidden>
							<Icon name='arrow right' />
						</Button.Content>
					</Button>
				</Link>
			</div>

			<style jsx>{`
				div {
					height: 80px;
					text-align: center;
				}
			`}</style>
		</>
	)
}
