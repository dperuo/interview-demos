/**
 * Arrays, Objects, Sets and Maps
 * Methods of storing data in JavaScript.
 */

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

/**
 * Arrays inherit their properties from the Array prototype object.
 * They can be of any length and hold any type of data, including duplicates.
 * Data in arrays are stored in sequence and accessed by index or value.
 */

let Mars = {
  Radius: 2106,
  Day: '1d 0h 40m',
  Mass: '0.107 Earth Masses',
  Orbit: 687
  Gravity: 3.711
}

/**
 * Objects inherit their properties from the Object prototype object.
 * They can be of any depth and hold any type of data.
 * Data in objects are stored as key-value pairs.
 * Keys are always strings and must be unique.
 * Key-value pairs are sorted alphabetically. Values are accessed by key.
 */

let planetSet = new Set();

planetSet
  .add('Mercury')
  .add('Venus')
  .add('Earth')
  .add('Mars')
  .add('Jupiter')
  .add('Saturn')
  .add('Uranus')
  .add('Neptune')
  .add('Pluto');

/**
 * Sets inherit their properties from the Set prototype object.
 * They can be of any length and hold only unique values.
 * Data in sets are stored in sequence and accessed by value.
 */

let marsMap = new Map();

marsMap
  .set('Radius', 2106,)
  .set('Day', '1d 0h 40m',)
  .set('Mass', '0.107 Earth Masses',)
  .set('Orbit', 687)
  .set('Gravity', 3.711);

/**
 * Maps inherit their properties from the Map prototype object.
 * They can hold any type of data.
 * Data in objects are stored as key-value pairs.
 * Keys can be of any object type, but must be unique.
 * Key-value pairs are stored in sequence and accessed by key or value.
 */
