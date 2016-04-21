/**
 * @fileoverview Provide zz.factories.BaseFactory.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.factories.BaseFactory' );
goog.require( 'goog.events');
goog.require( 'goog.events.EventTarget');

/**
 * Base services class.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
zz.factories.BaseFactory = function( ){

	goog.base( this );
};

/**
 * Base inheritance.
 */
goog.inherits( zz.factories.BaseFactory, goog.events.EventTarget );