// Copyright 2016 Artem Lytvynov <buntarb@gmail.com>. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @license Apache-2.0
 * @copyright Artem Lytvynov <buntarb@gmail.com>
 */

goog.provide( 'zz.factories.BaseFactoryTest' );
goog.setTestOnly( 'zz.factories.BaseFactoryTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.factories.BaseFactory' );
goog.require( 'goog.events.EventTarget' );

var factory;

function setUp( ){

    factory = zz.factories.BaseFactory.getInstance( );
}

function testConstructor( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        factory instanceof zz.factories.BaseFactory
    );
}

function testInheritance( ){

   assertTrue(

        'Instance must be non-null and have the expected class',
        factory instanceof goog.events.EventTarget
    );
}

function testFactoryCreating( ){

    assertThrows(

        'Factory is a singleton',
        function( ){

            return new zz.factories.BaseFactory( );
        });
}