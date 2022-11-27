// An open-closed bracket (,] random number generator that makes random integers within a range
var randomIntInRange = function(min, max) {
    return Math.floor(min + (Math.random() * max * 2));
}
