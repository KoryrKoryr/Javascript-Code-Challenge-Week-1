// Calculates the demerit points for a car based on its speed.

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const pointsPerDemerit = 1;
  const maxPointsBeforeSuspension = 12;

  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > maxPointsBeforeSuspension) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

// Input the car's speed
const carSpeed = parseInt(prompt("Enter the car's speed:"));

// Calculate and display the demerit points
alert(calculateDemeritPoints(carSpeed));
