var x, y, z;
prepareIntegerNumbers = function () {
    x = 1;
    y = 5;
};
prepareStringNumbers = function () {
    x = '1';
    y = '5';
};
addXAndY = function () {
    z = add(x, y);
};
expectsOutputToBe6 = function () {
    expect(z).toBe(6);
};
