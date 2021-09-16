const lights = ['red', 'yellow', 'green', 'yellow'];

function trafficLights() {
  const previousLight = lights.shift(); // поверт видалю світло
  lights.push(previousLight);
  console.log(previousLight);
  // return previousLight;
}

let timerId = setInterval(trafficLights, 1000);

setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 20000);
