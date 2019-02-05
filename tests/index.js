import { expect } from 'chai';
import Parser from '../src/index.js';

describe( 'parser', () => {
	it( 'is a class', () => {
		expect( Parser ).to.be.a( 'function' );
	} );
} );
