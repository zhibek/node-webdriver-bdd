var humanify = require('./../support/helpers/humanify');
var contexts = require('./../support/context');

var origFunctionName = global['it'];
var acceptableFunctionNames = ['given', 'when', 'then', 'and', 'but'];
var functionOveride = function () {
    var argumentsArray = Array.prototype.slice.call(arguments);
    var specTitle = argumentsArray[0];
    var specFunction = argumentsArray[1];

    if (typeof specFunction === 'undefined') {

        var expectedSpecFunctionName = humanify.camelize(specTitle);
        var expectedSpecFunction;
        for (var contextName in contexts) {
            if (typeof contexts[contextName][expectedSpecFunctionName] !== 'undefined') {
                expectedSpecFunction = contexts[contextName][expectedSpecFunctionName];
                break;
            }
        }
        specFunction = expectedSpecFunction;
    }
    
    /**
     * callback arguments got request, user handles async
     */
    if (specFunction.length === 1) {
        return origFunctionName.call(null, specTitle, specFunction);
    }

    return runSpec(specTitle, specFunction);
};
for (var functionNameKey in acceptableFunctionNames) {
    global[acceptableFunctionNames[functionNameKey]] = functionOveride;
};
