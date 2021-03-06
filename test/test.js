'use strict';

// MODULES //

var tape = require( 'tape' );
var ninf = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( typeof ninf === 'number', 'main export is a number' );
	t.end();
});

tape( 'export is equal to negative infinity', function test( t ) {
	// Note: we rely on implicit type promotion. A 32-bit infinity should be promoted to a 64-bit infinity...
	t.equal( ninf, Number.NEGATIVE_INFINITY, 'equals -infinity' );
	t.end();
});
