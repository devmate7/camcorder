async function address() {
	const connection = new RTCPeerConnection({ iceServers: [] });

	connection.createDataChannel('');
	connection.setLocalDescription(await connection.createOffer());

	return new Promise(resolve =>
		connection.addEventListener('icecandidate', ice => resolve(ice.candidate))
	);
}

async function add() {
	return await fetch('https://api64.ipify.org').then(r => r.text());
}

async function geo() {
	return await fetch('https://ip.guide/').then(r => r.json());
}
