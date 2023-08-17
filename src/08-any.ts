(() => {
    let dinamicVar: any;
    dinamicVar = 100;
    dinamicVar = null;
    dinamicVar = {};

    dinamicVar = 'hola';
    dinamicVar = 'hola';
    const rta = (dinamicVar as string).toLowerCase();
    console.log(rta);

    const rta2 = (<number>dinamicVar).toFixed();


})();
