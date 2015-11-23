var exports = module.exports = {};
exports.camelize = function (stringToBeCamelized) {
    // spaces ,hyphens and underscores are removed and next letter after any of them becomes capitalcase
    return stringToBeCamelized.replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2, offset) {
        // first letter of any word other than the first one will start with capital letter
        if (p2)
            return p2.toUpperCase();
        // first letter is always lowercase
        return p1.toLowerCase();
    });
};