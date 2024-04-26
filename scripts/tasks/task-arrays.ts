const cars = ['Chevrolet', 'Lamborgini', 'Whatever'];
cars.push('Camri', 'Suzuki', 'Tesla');
const lastDeletedFromEnd = cars.pop();
cars.unshift('Ferrari');
cars.unshift('IH8Cars', 'Temperus');
const lastDeletedFromStart = cars.shift();
cars.push(lastDeletedFromEnd!);

export {};
