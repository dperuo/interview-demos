/**
 * Classes and Objects
 *
 * Classes are templates for objects. They define object properties and
 * behaviors.
 */
class GalaxyShip {
    constructor({ name, registry, captain }) {
        this.info = {
            captain,
            decks: 42,
            maxCrew: 6000,
            maxWarp: 9.8,
            name,
            registry,
            type: "Explorer"
        };
    }
    get(item) {
        return (item) ? this.info[item] : this.info;
    }
}
/**
 * Objects are instances of classes and inherit class properties and methods
 */
let enterprise = new GalaxyShip({
    captain: "Picard",
    name: "Enterprise D",
    registry: "NCC-1701-D"
});
enterprise.get("decks");
// => 42
