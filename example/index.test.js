import { getDelayedKeyword } from './index.js';

describe('Example Test', () => {
	it('should return "bar" after 1 second', async (done) => {
		const keyword = await getDelayedKeyword();

		expect(keyword).toEqual('bar');

		done();
	});
});
