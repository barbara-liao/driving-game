var $car = document.querySelector('#car');

addEventListener('keydown', handleTurn);
addEventListener('keydown', handleStart);

var data = {
  location: {
    top: 0,
    left: 0
  }
};

function handleTurn(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'east';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'south';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'west';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'north';
  }
}

function handleStart(event) {
  if (event.key === ' ') {
    setInterval(startCar, 16);
  }
}
var start = 0;
function startCar() {
  start += 3;
  $car.style.left = start + 'px';
  data.location.left = start;
}
