(() => {
    let prices = [1,2,3,4,5,6,7, 'texto', true];

    prices.push(234);

    let mixed: (number | string | boolean | object)[] = ['hola', true];

    console.log(mixed);

})();
