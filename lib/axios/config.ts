import axios from 'axios';

let base_url: string = '';
let dev: string | undefined = process.env.NEXT_PUBLIC_DEV_URL ?? '';
let mode: string | undefined = process.env.NEXT_PUBLIC_MODE ?? 'dev';

switch (mode?.toLowerCase()) {
	case 'dev':
		base_url = dev;
		break;
	default:
		base_url = dev;
		break;
}

export default axios.create({
	baseURL: base_url,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json, text/plain, /',
	},
});
