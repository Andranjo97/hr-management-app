import { memo } from 'react';
import { useMediaQuery } from '@utils/hooks';
import { mediaSm } from '@styles/export.module.scss';

const Footer = () => {
	const isSmallScreen = useMediaQuery(mediaSm);
	const label = isSmallScreen ? 'J. A. Naranjo' : 'Jonathan Andrés Naranjo';

	return (
		<footer>
			<span>{label}</span>
		</footer>
	);
};

export default memo(Footer);
