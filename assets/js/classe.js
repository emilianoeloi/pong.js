
function classe(id, name) {
// Use the inherit() function to create an object that inherits from the
// prototype object defined below. The prototype object is stored as
// a property of this function, and defines the shared methods (behavior)
// for all range objects.
    var r = inherit(classe.methods);
// Store the start and end points (state) of this new range object.
// These are noninherited properties that are unique to this object.
    r._id = id;
    r._name = name;
// Finally return the new object
    return r;
}

classe.methods = {
    setId: function(id) { this._id = id; },
    setName: function(name) { this._name = name;},
    getId: function() { return this._id; },
    getName: function() { return this._name; }
};
// Here are example uses of a range object.
var c = classe(1,'Emiliano'); // Create a range object
console.log(c);
c.setId(2);
c.setName('Rhyana');
console.log(c);