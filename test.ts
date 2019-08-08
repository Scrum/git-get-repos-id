import test from 'ava';
import gitGetReposId from './index';

test('pkg is function', t => {
	t.is(typeof gitGetReposId, 'function');
});