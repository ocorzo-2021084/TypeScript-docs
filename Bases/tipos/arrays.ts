(() => {
    // Your code here
    const numbers: (string | number | boolean)[] = [1, 2, 3, '4', 5];
    const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

    villians.forEach(v => { console.log(v.toUpperCase()); });

    numbers.push(6);
    numbers.push('7');
    numbers.push(true);

    console.log(numbers);
})();