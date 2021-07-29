import { useState, useEffect } from 'react';

export default function Clock() {
	
	const [now, setNow] = useState(Date.now());
	useEffect(effect);

	return new Date(now).toLocaleString();

	function effect() {

		const interval = setInterval(tick, 500);
		return clearEffect;

		function tick() {
			setNow(Date.now());
		}

		function clearEffect() {
			clearInterval(interval);
		}
	}
}