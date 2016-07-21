/**
 * Singletons
 *
 * The Singleton Design Pattern limits the number of instances of a particular
 * object to just one and provides a global API for accessing that one object.
 *
 * Singletons are best used when the same properties and methods must be
 * accessed from multiple points in the application.
 *
 * Pub/Sub systems and variable constants are excellent use cases.
 *
 */

function getDeathstar() {

 function buildDeathstar() {
   return {
     owner: 'Empire',
     weapon: 'Active',
     target: ''
   }
 }

 return (!DEATHSTAR) ? buildDeathstar() : DEATHSTAR;
}

var DEATHSTAR = getDeathstar();

DEATHSTAR.target
// ==> ""

DEATHSTAR.target = 'Alderaan'

DEATHSTAR.target
// ==> "Alderaan"

var DEATHSTAR = getDeathstar()

DEATHSTAR.target
// ==> "Alderaan"
