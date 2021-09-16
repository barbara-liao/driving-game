var $car = document.querySelector('#car');

addEventListener('keydown', handleTurn);

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
