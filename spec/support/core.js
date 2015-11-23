var humanify = require('./../support/helpers/humanify');
var contexts = require('./../support/context');

var origFunctionName = global['it'];
global['it'] = function () {
    var argumentsArray = Array.prototype.slice.call(arguments);
    var specTitle = argumentsArray[0];
    var specFunction = argumentsArray[1];

    /**
     * callback arguments got request, user handles async
     */
    if (typeof specFunction === 'undefined') {
        
        var expectedSpecFunctionName = humanify.camelize(specTitle);
        var expectedSpecFunction;
        for(var contextName in contexts){
            if(typeof contexts[contextName][expectedSpecFunctionName] !== 'undefined'){
                expectedSpecFunction = contexts[contextName][expectedSpecFunctionName];
                break;
            }
        }
        specFunction = expectedSpecFunction;
        return origFunctionName.call(null, specTitle, specFunction);
    }
    else if (specFunction.length === 1) {
        return origFunctionName.call(null, specTitle, specFunction);
    }

    return runSpec(specTitle, specFunction);
};
