var personObj = {};

personObj.name = "name";
personObj.location = "location";
personObj.age = "age";


var { location } = personObj;


const originalAnimalArr = ['Dog', 'Cat', 'Horse'];

const workingAnimalArr = originalAnimalArr;
workingAnimalArr.push('Bird');

const finishOrder = [
  "Speed Racer",
  "Flash Marker Jr.",
  "Racer X",
  "Snake Oiler",
  "Trixie",
  "Grey Ghost",
  "Taejo Tagokhan"
];

const [first, second, third, ...theRest] = finishOrder;

console.log(first, second, third, theRest);
