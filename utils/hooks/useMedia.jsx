import { useState, useCallback, useEffect } from 'react';

export const useMediaQuery = width => {
	const [targetReached, setTargetReached] = useState(false);
	let parsedWidth = width;
	if (typeof width === 'string') {
		const regEx = RegExp( /[a-zA-Z]/);
		parsedWidth = regEx.test(width) ? width : `${width}px`;
	}

	const updateTarget = useCallback((e) => {
		if (e.matches) setTargetReached(true);
		else setTargetReached(false);
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${parsedWidth})`);
		media.addEventListener('change', updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) setTargetReached(true);

		return () => media.removeEventListener('change', updateTarget);
	}, []);

	return targetReached;
}

export default useMediaQuery;
