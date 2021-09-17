const lights = ['red', 'yellow', 'green', 'yellow'];

const IntervalId = setInterval(() => {
  for (let i = 0; i < lights.length; i++) {
    console.log(lights[i]);
    alert(lights[i]);
  }
}, 1000);

setTimeout(() => {
  clearInterval(IntervalId);
}, 9000);
