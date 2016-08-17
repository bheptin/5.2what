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
///Still calling the global output. this time, no a or b, but still the "join" function


console.assert(whatIsThis.call(trickyTricky) === "[object Object],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///Same as before, but this time, used trickyTricky, but didn't use the keys to call anything
///so, nothing returned.


console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === "[object Object],nice,job")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///This returns the array and nice job per the (a,b) in whatIsThis.


console.assert(whatIsThis.call(confusing) === "[object Object],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///Same as before, but this time, used confusing, but didn't use the keys to call anything
///so, nothing returned


console.assert(whatIsThis.call(confusing, 'hello') === "[object Object],hello,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///whatIsThis is calling on something it can't use, but still returns hello, because it's
///set up correctly.


console.assert(whatIsThis.apply(trickyTricky) === "[object Object],,")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///Refer to the last time, this happened. Pulled back whatIsThis as an array, but nothing
///to use for the (a,b). It has to be setup as an array.


console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === "[object Object],nice,job")
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///whatIsThis is called, then apply to get an array, with the (a,b) formula.


console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///can't be done because there are no brackets around the array, which is wrong
///when using apply.


console.assert(inAFunction('what will', 'happen?') === '[what will, happen?]')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///function still uses the same setup, because it's two arguements being combined into one.


try{
    console.assert(inAFunction.test3('A', 'B') === FILL_ME_IN)
} catch(e){
    log(e)
}
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?
///can't be worked. Wording in the arguement uses two functions.


var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
///inAFunction was never redefined. It returns it's original "this". This is still attached 
///to it


var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?



console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
