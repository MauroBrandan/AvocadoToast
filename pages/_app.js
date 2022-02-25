import '../global.css'
import 'semantic-ui-css/semantic.min.css'
import { Layout } from '../components/Layout'
import CartProvider from '../context/Cart'

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	)
}

export default MyApp
