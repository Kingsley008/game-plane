var log = console.log.bind(console);

// 判断相撞
aInb = function (x, x1, x2) {
    return x >= x1 && x <= x2;
};

function getRandom(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}
