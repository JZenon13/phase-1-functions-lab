// // Code your solution in this file!
// const currentLocation = 42;
// function distanceFromHqInBlocks(pickupLocation) {
//   return Math.abs(pickupLocation - currentLocation);
// }

// function distanceFromHqInFeet(pickupLocation) {
//   return Math.abs(distanceFromHqInBlocks(pickupLocation) * 264);
// }

// function distanceTravelledInFeet(start, destination) {
//   return Math.abs((start - destination) * 264);
// }

// function calculatesFarePrice(start, destination) {
//   let blah = distanceTravelledInFeet(start, destination);
//   if (blah <= 400) {
//     return 0;
//   } else if (blah <= 2000) {
//     return 0.02 * (blah - 400);
//   } else if (blah <= 2500) {
//     return 25;
//   } else if (blah > 2500) {
//     return "cannot travel that far";
//   }
// }

const scuberHq = 42;

function distanceFromHqInBlocks(num) {
  return Math.abs(scuberHq - num);
}

const distanceFromHqInFeet = (num) => {
  return Math.abs(scuberHq - num) * 264;
};

function calculatesFarePrice(start, destination) {
  let fuck = distanceTravelledInFeet(start, destination);

  if (fuck < 400) {
    return 0;
  } else if (fuck > 400 && fuck < 2000) {
    return (fuck - 400) * 0.02;
  } else if (fuck > 2000 && fuck < 2500) {
    return 25;
  } else if (fuck > 2500) {
    return "cannot travel that far";
  }
}

const distanceTravelledInFeet = (start, destination) => {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
};
