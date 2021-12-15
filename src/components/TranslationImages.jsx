
import { signs } from '../views/signs/signs';

const TranslationImages = ({ translateText = [] }) => {
	const images = translateText.split('').map((char, index) => {
		const sign = signs.find(sign => sign.name === char.toLowerCase());

		if (sign) {
			return <img key={ index + char } src={ sign.image } alt={ char } />;
		} else {
			return char;
		}
	})
			
	return (
		<section>
			{ images }
		</section>
	);
}

export default TranslationImages
