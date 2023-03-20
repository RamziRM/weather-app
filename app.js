// get dom elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const city = document.getElementById('city-name');
const temp = document.getElementById('temp');
const weatherDescrip = document.getElementById('weather-descrip');
const icon = document.getElementById('weather-icon');

// add event listener to search button
searchBtn.addEventListener('click', () => {
  // get value from input
  const locationValue = searchInput.value;
  // call api
  getWeather(locationValue);
});

// api key
const apiKey = 'd686dc120b2947b9a44140830232003';

// get weather function
async function getWeather(userInput) {
    // fetch api
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}`);
    // get data
    const data = await response.json();
    console.log(data);
    // handle error if city name is wrong with alert by using catch
    try {
        // get city name
        const cityName = data.location.name;
        // get temp
        const tempValue = data.current.temp_c;
        // get weather description
        const weatherDescripValue = data.current.condition.text;
        // get weather icon
        const weatherIcon = data.current.condition.icon;
        // icon url
        const iconUrl = `http:${weatherIcon}`;

        // set dom elements
        city.textContent = cityName;
        temp.textContent = tempValue + '°C';
        weatherDescrip.textContent = weatherDescripValue;
        icon.src = iconUrl;
    }
    catch(error) {
        alert('Please enter a valid city name');
    }

}

// dark mode
const checkbox = document.getElementById('checkbox');
const body = document.getElementById('body');
if (checkbox.checked === "checked") {
    body.classList.add('dark');
} else {
    body.classList.remove('dark');
}

// event listener for light/dark mode
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});