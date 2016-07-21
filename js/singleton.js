/**
 * Singletons
 *
 * The Singleton Design Pattern limits the number of instances of a particular
 * object to just one and provides a global API for accessing that one object.
 *
 * Singletons are best used when properties and methods are accessed from
 * multiple points in the application.
 *
 * Pub/Sub systems and constants are excellent use cases for singletons.
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

 return (!deathstar) ? buildDeathstar() : deathstar;
}

const deathstar = getDeathstar();

Deathstar.target
// ==> ''
