let instructor = {
  firstName: "Ankit",
  isInstructor: true,
  favouitePlayers: ["Dhoni", "Virat", "Sachin", "Jadeja"],
};

console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.values(instructor).length);
console.log("to get the lenght -  ", Object.keys(instructor || {}).length);
