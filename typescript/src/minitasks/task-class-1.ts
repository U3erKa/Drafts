class Worker {
  name: string;
  surname: string;
  salary: number;
  daysOfWork: number;
  constructor(name: string, surname: string, salary: number, daysOfWork: number) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.daysOfWork = daysOfWork;
  }
  payment() {
    return this.salary * this.daysOfWork;
  }
}

const employee = [
  new Worker('U1erKa', 'U1', 9001, 30),
  new Worker('U2erKa', 'U2', 8000, 40),
  new Worker('U3erKa', 'U3', 6000, 50),
  new Worker('U4erKa', 'U4', 4000, 60),
  new Worker('U5erKa', 'U5', 10000, 10),
];

for (let i = 0; i < employee.length; i++) {
  console.log(employee[i].payment());
}

export { Worker };
