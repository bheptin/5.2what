// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}

/**
 * THE PROBLEMS
 */

console.assert(whatIsThis('hello', 'world') === '[object Window],hello,world')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///This is calling on the object window as being an array tied to 2 variables.

console.assert(window.whatIsThis('hello', 'world') === '[object window],hello,world')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///This is also calling the same as the first. It's got "window" added, but it's the
//default in the first. Repetition.

console.assert(inAnObject.test1('face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///inAnObject and test1 are both objects in the first inner of the global. test1
///is refering to to the earlier THIS in the golbal scope.


console.assert(inAnObject.anotherObject.test1('twitter', 'book') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///can't be fixed. There is no test1 in anotherObject.


console.assert(inAnObject.anotherObject.test2('twitter', 'book') === '[object Object],twitter,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///inAnObject and test1 are both objects in the first inner of the global. test2
///is also refering to to the earlier THIS in the golbal scope. but, coming from inside inAnObject


console.assert(whatIsThis.call() === "[object Window],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///


console.assert(whatIsThis.call(trickyTricky) === "[object Object],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === "[object Object],nice,job")
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(whatIsThis.call(confusing) === "[object Object],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(whatIsThis.call(confusing, 'hello') === "[object Object],hello,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(whatIsThis.apply(trickyTricky) === "[object Object],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === "[object Object],nice,job")
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///can't be done because there are no brackets around the array, which is wrong
///when using apply.


console.assert(inAFunction('what will', 'happen?') === '[what will, happen?]')
// Once you've figured out what the output is, answer here in a comment: Why is this so?



try{
    console.assert(inAFunction.test3('A', 'B') === '[what will, happen?]')
} catch(e){
    log(e)
}
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?



var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally')
// Once you've figured out what the output is, answer here in a comment: Why is this so?



var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
