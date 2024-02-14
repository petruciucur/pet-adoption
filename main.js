async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
  const weatherData = await weatherPromise.json();
  // console.log(weatherData.properties.periods[0].temperature);
  const ourTemperature = weatherData.properties.periods[0].temperature;
  const celsius = (ourTemperature - 32) * 5 / 9;
  document.querySelector("#temperature-output").textContent = ourTemperature;
  document.querySelector("#grade-celsius").textContent = celsius.toFixed(2);
}

start();