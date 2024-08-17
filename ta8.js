function findTheOldest (people) {
  const edades = people.map(edad => (edad.yearOfDeath - edad.yearOfBirth));
  let mayor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > mayor) {
      mayor = edades[i];
  }
    
  }
  console.log(mayor);
  return mayor ;
}

findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Pepe",
    yearOfBirth: 1900,
    yearOfDeath: 1910,
  }
]
);