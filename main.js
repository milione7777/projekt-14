// завдання 1
const users = [
  { name: "Іван", age: 25 },
  { name: "Олена", age: 30 },
  { name: "Олександр", age: 22 },
];

const names = users.map((user) => user.name);
console.log(names);

// завдання 2
const people = [
  { name: "Іван", age: 25, eyeColor: "blue" },
  { name: "Олена", age: 30, eyeColor: "green" },
  { name: "Олександр", age: 22, eyeColor: "blue" },
];

const blueEyedPeople = people.filter((person) => person.eyeColor === "blue");
console.log(blueEyedPeople);

// завдання 3
const persons = [
    { name: 'Іван', age: 25, gender: 'male' },
    { name: 'Олена', age: 30, gender: 'female' },
    { name: 'Олександр', age: 22, gender: 'male' },
    { name: 'Марія', age: 28, gender: 'female' }
  ];
  
  const maleNames = persons
    .filter(person => person.gender === 'male')
    .map(person => person.name);
  
  console.log(maleNames);
  
  const femaleNames = persons
    .filter(person => person.gender === 'female')
    .map(person => person.name);
  
  console.log(femaleNames);

// завдання 4
const members = [
    { name: 'Іван', age: 25, isActive: true },
    { name: 'Олена', age: 30, isActive: false },
    { name: 'Олександр', age: 22, isActive: true },
    { name: 'Марія', age: 28, isActive: false }
  ];
  
  const inactiveMembers = members.filter(member => !member.isActive);
  
  console.log(inactiveMembers);

// завдання 5
const membersList = [
  { name: 'Іван', age: 25, email: 'ivan@example.com' },
  { name: 'Олена', age: 30, email: 'olena@example.com' },
  { name: 'Олександр', age: 22, email: 'oleksandr@example.com' },
  { name: 'Марія', age: 28, email: 'maria@example.com' }
];

const emailToFind = 'olena@example.com';

const member = membersList.find(member => member.email === emailToFind);

console.log(member);

// завдання 6 
const participants = [
  { name: 'Іван', age: 25, email: 'ivan@example.com' },
  { name: 'Олена', age: 30, email: 'olena@example.com' },
  { name: 'Олександр', age: 22, email: 'oleksandr@example.com' },
  { name: 'Марія', age: 28, email: 'maria@example.com' }
];

const minAge = 24;
const maxAge = 29;

const ageFilteredParticipants = participants.filter(participant => participant.age >= minAge && participant.age <= maxAge);

console.log(ageFilteredParticipants);