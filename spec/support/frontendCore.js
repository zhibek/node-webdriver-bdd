given = and = but = when = then = function (specTitle) {
    var expectedSpecFunction = camelize(specTitle);
    return it(specTitle, eval(expectedSpecFunction));
};
