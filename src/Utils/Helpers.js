const firstNames = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Sophia",
  "Jackson",
  "Oliver",
  "Isabella",
  "Lucas",
  "Ava",
  "Liam",
  "Mia",
  "Aiden",
  "Sophia",
  "Caden",
  "Amelia", // ... and so on
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Perez",
  "Wilson", // ... and so on
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export function generateRandomName() {
  const firstName = firstNames[getRandomIndex(firstNames)];
  const lastName = lastNames[getRandomIndex(lastNames)];
  return `${firstName} ${lastName}`;
}

export function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
