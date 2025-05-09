const { WINDOW_SIZE } = require('../config');

const windows = {
  p: [],
  f: [],
  e: [],
  r: [],
};

function updateWindow(id, newNumbers) {
  const window = windows[id];
  const prevState = [...window];

  newNumbers.forEach(num => {
    if (!window.includes(num)) {
      if (window.length >= WINDOW_SIZE) {
        window.shift(); // Remove the oldest number if window exceeds the size
      }
      window.push(num);
    }
  });

  return {
    prevState,
    currState: [...window],
  };
}

function getAverage(id) {
  const arr = windows[id];
  if (arr.length === 0) return 0;
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return parseFloat(avg.toFixed(2)); 
}

module.exports = { updateWindow, getAverage };
