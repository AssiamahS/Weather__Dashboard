// Define variables to store elements
const cityForm = document.getElementById('city_form');
const cityInput = document.getElementById('city_input');

// Define event listener for form submission
cityForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const cityName = cityInput.value.trim(); // Get the value of the city input and remove leading/trailing whitespace

    // Call a function to fetch weather data based on the city name
    getWeatherData(cityName);
});

// Function to fetch weather data from an API
function getWeatherData(cityName) {
    // You can use fetch or any other method to fetch weather data from an API
    // Example using fetch and OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1d602c717b7fd367cb280b85b4d8a51&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found'); // Throw an error if city not found
            }
            return response.json();
        })
        .then(data => {
            // Call a function to update the UI with the weather data
            updateWeatherUI(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Display error message to the user
            alert('Error fetching weather data. Please try again later.');
        });
}

// Function to update the UI with weather data
function updateWeatherUI(weatherData) {
    // Extract relevant data from the weatherData object and update the UI accordingly
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;

    // Update the UI elements with the weather data
    document.getElementById('today_temp').textContent = `${temperature}°C`;
    document.getElementById('today_humidity').textContent = `${humidity}%`;
}
