enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string;
  age: number;
  nickname: string;
  hobbies: string[];
  role: [number, string],
  rolee: Role
} = {
// const person = {
  name: "Eder",
  age: 30,
  nickname: "Ed",
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  rolee: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person);
