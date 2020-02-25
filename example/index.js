import Example from './example-b';

export const getDelayedKeyword = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Example.foo);
		}, 1000);
	});
};


export const print = async () => {
	const keyword = await getDelayedKeyword();

	console.log(`Print: ${keyword}`);
};
