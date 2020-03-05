import * as fetch from 'components/fetch/genres.js';


describe('getGenre()', () => {
	test('return genre according to the chosen mood', async () => {
		const actual = await fetch.getGenre('romantic');
		const expected = 'Jazz';
	expect(actual).toBe(expected) ;
	});
});


describe('createQuery()', () => {
	test('return genre according to the chosen mood', async () => {
		const genre = 'romantic';
		const countPerPage = 10;
		const source = `https://api-v2.hearthis.at/categories/${genre}/?page=1&count=${countPerPage}`;
		const actual = await fetch.createQuery('romantic');
		const expected = 'https://api-v2.hearthis.at/categories/Jazz/?page=1&count=10';
	expect(actual).toBe(expected) ;
	});
});

