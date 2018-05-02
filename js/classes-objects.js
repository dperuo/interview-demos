/**
 * Classes and Objects
 *
 * Classes are templates for objects. They define object properties and
 * behaviors.
 */
var GalaxyShip = /** @class */ (function () {
    function GalaxyShip(_a) {
        var name = _a.name, registry = _a.registry, captain = _a.captain;
        this.info = {
            captain: captain,
            decks: 42,
            maxCrew: 6000,
            maxWarp: 9.8,
            name: name,
            registry: registry,
            type: "Explorer"
        };
    }
    GalaxyShip.prototype.get = function (item) {
        return (item) ? this.info[item] : this.info;
    };
    return GalaxyShip;
}());
/**
 * Objects are instances of classes and inherit class properties and methods
 */
var enterprise = new GalaxyShip({
    captain: "Picard",
    name: "Enterprise D",
    registry: "NCC-1701-D"
});
enterprise.get("decks");
// => 42
